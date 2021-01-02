import { useLayoutEffect, useRef } from "react";
import Card from "./Card";

const CardContainer = () => {
  const cardContainer = useRef();
  let cardWidth = 0.0;
  let totalCardIndex = 0;
  let middleCard = 0;
  let cardOffset = 0.0;
  let inProgress = false;
  const cardScale = 0.95;

  let isDown = false;
  let moveX = 0;
  let offsetX = 0;
  let animations = [];

  useLayoutEffect(() => {
    cardWidth = parseFloat(
      getComputedStyle(cardContainer.current.children[0]).width
    );
    totalCardIndex = cardContainer.current.children.length - 1;
    middleCard = Math.floor(totalCardIndex / 2);
    cardOffset = cardWidth * (1 / 3);

    animations.push(window.requestAnimationFrame(animate));
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);

    linkCards();
    orderCards();
    offsetCards();
    cascadeCards();
    scaleCards();

    return () => {
      animations.forEach((animation) => cancelAnimationFrame(animation));
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
    };
  }, []);

  const linkCards = () => {
    for (let i = 0; i <= totalCardIndex; i++) {
      cardContainer.current.children[i].addEventListener("click", (e) => {
        const currentIndex = Array.from(e.path[1].children).indexOf(e.path[0]);
        if (currentIndex < middleCard) {
          for (let j = 0; j < middleCard - currentIndex; j++) {
            setTimeout(() => previousCard(), j * 220);
          }
        } else if (currentIndex > middleCard) {
          for (let j = 0; j < currentIndex - middleCard; j++) {
            setTimeout(() => nextCard(), j * 220);
          }
        }
      });
    }
  };

  const orderCards = () => {
    let counterLeft = middleCard;
    let counterRight = 1;

    for (let i = 0; i <= totalCardIndex; i++) {
      if (i < middleCard) {
        cardContainer.current.children[i].style.left = `-${
          cardWidth * counterLeft--
        }px`;
      } else if (i > middleCard) {
        cardContainer.current.children[i].style.left = `${
          cardWidth * counterRight++
        }px`;
      } else {
        cardContainer.current.children[i].style.left = "0px";
      }
    }
  };

  const offsetCards = () => {
    let counterLeft = middleCard;
    let counterRight = 1;

    for (let i = 0; i <= totalCardIndex; i++) {
      let currentLeft = parseFloat(
        cardContainer.current.children[i].style.left
      );

      if (i < middleCard) {
        cardContainer.current.children[i].style.left = `${
          currentLeft + cardOffset * counterLeft--
        }px`;
      } else if (i > middleCard) {
        cardContainer.current.children[i].style.left = `${
          currentLeft - cardOffset * counterRight++
        }px`;
      }
    }
  };

  const cascadeCards = () => {
    for (let i = 0; i <= totalCardIndex; i++) {
      if (i <= middleCard) {
        cardContainer.current.children[i].style.zIndex = i;
      } else if (i > middleCard) {
        cardContainer.current.children[i].style.zIndex = -1.0 * i;
      }
    }
  };

  const scaleCards = () => {
    let counterLeft = middleCard;
    let counterRight = 1;

    for (let i = 0; i <= totalCardIndex; i++) {
      if (i <= middleCard) {
        cardContainer.current.children[i].style.transform = `scale(${Math.pow(
          cardScale,
          counterLeft--
        )})`;
      } else if (i > middleCard) {
        cardContainer.current.children[i].style.transform = `scale(${Math.pow(
          cardScale,
          counterRight++
        )})`;
      } else {
        cardContainer.current.children[i].style.transform = "scale(1)";
      }
    }
  };

  const nextCard = () => {
    if (!inProgress) {
      inProgress = true;

      const lastCardLeft =
        cardContainer.current.children[totalCardIndex].style.left;
      const lastCardTransform =
        cardContainer.current.children[totalCardIndex].style.transform;
      const lastCardZIndex =
        cardContainer.current.children[totalCardIndex].style.zIndex;

      for (let i = totalCardIndex; i > 0; i--) {
        const card = cardContainer.current.children[i];

        card.style.transitionDuration = "0.5s";
        card.style.left = cardContainer.current.children[i - 1].style.left;
        card.style.transform =
          cardContainer.current.children[i - 1].style.transform;
        card.style.zIndex = cardContainer.current.children[i - 1].style.zIndex;
      }
      cardContainer.current.children[0].style.transitionDuration = "0.2s";
      cardContainer.current.children[0].style.transform = "scale(0)";

      setTimeout(() => {
        cardContainer.current.children[0].style.left = lastCardLeft;
        cardContainer.current.children[0].style.zIndex = lastCardZIndex;
        cardContainer.current.append(cardContainer.current.children[0]);

        setTimeout(() => {
          cardContainer.current.children[
            totalCardIndex
          ].style.transitionDuration = "0.2s";
          cardContainer.current.children[
            totalCardIndex
          ].style.transform = lastCardTransform;

          inProgress = false;
        }, 10);
      }, 200);
    }
  };

  const previousCard = () => {
    if (!inProgress) {
      inProgress = true;

      const firstCardLeft = cardContainer.current.children[0].style.left;
      const firstCardTransform =
        cardContainer.current.children[0].style.transform;
      const firstCardZIndex = cardContainer.current.children[0].style.zIndex;

      for (let i = 0; i < totalCardIndex; i++) {
        const card = cardContainer.current.children[i];

        card.style.transitionDuration = "0.5s";
        card.style.left = cardContainer.current.children[i + 1].style.left;
        card.style.transform =
          cardContainer.current.children[i + 1].style.transform;
        card.style.zIndex = cardContainer.current.children[i + 1].style.zIndex;
      }
      cardContainer.current.children[totalCardIndex].style.transitionDuration =
        "0.2s";
      cardContainer.current.children[totalCardIndex].style.transform =
        "scale(0)";

      setTimeout(() => {
        cardContainer.current.children[
          totalCardIndex
        ].style.left = firstCardLeft;
        cardContainer.current.children[
          totalCardIndex
        ].style.zIndex = firstCardZIndex;
        cardContainer.current.insertBefore(
          cardContainer.current.children[totalCardIndex],
          cardContainer.current.children[0]
        );

        setTimeout(() => {
          cardContainer.current.children[0].style.transitionDuration = "0.2s";
          cardContainer.current.children[0].style.transform = firstCardTransform;

          inProgress = false;
        }, 10);
      }, 200);
    }
  };

  const onDown = (e) => {
    isDown = true;
    moveX = 0;
    offsetX = e.clientX;
  };

  const onMove = (e) => {
    if (isDown) {
      moveX = e.clientX - offsetX;
      offsetX = e.clientX;
    }
  };

  const onUp = () => {
    isDown = false;
  };

  const animate = () => {
    window.requestAnimationFrame(animate);

    if (isDown) {
      moveX *= 0.92;
      if (moveX > 1) {
        nextCard();
      } else if (moveX < -1) {
        previousCard();
      }
    }
  };

  return (
    <>
      <div
        ref={cardContainer}
        className="absolute top-1/2 left-1/2 transition transform -translate-y-1/2 -translate-x-1/2 w-1/6"
      >
        <Card num={0} />
        <Card num={1} />
        <Card num={2} />
        <Card num={3} />
        <Card num={4} />
        <Card num={5} />
        <Card num={6} />
        <Card num={7} />
        <Card num={8} />
      </div>
    </>
  );
};

export default CardContainer;
