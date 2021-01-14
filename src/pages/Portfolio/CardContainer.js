import { useLayoutEffect, useRef, useState } from "react";
import Card from "./Card";
import projectList from "./Projects/projectList";

const CardContainer = ({ parentRef }) => {
  const cardContainer = useRef();
  const [modalIsOpen, setModalIsOpen] = useState({
    0: false,
  });
  let cardWidth = 0.0;
  let totalCardIndex = 0;
  let middleCard = 0;
  let cardOffset = 0.0;
  let inProgress = false;
  const ANIMATION_DURATION = 200;
  const CARD_SCALE = 0.95;
  const TRANSLATE_Y = -50;

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
    cardOffset = cardWidth * (1 / 5);

    animations.push(window.requestAnimationFrame(animate));
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);

    linkCards();
    orderCards();
    offsetCards();
    cascadeCards();
    transformCards();
    nextCard();

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
        let totalTime = 0;
        if (currentIndex < middleCard) {
          for (let j = 0; j < middleCard - currentIndex; j++) {
            totalTime += ANIMATION_DURATION + 20;
            setTimeout(() => previousCard(), totalTime);
          }
        } else if (currentIndex > middleCard) {
          for (let j = 0; j < currentIndex - middleCard; j++) {
            totalTime += ANIMATION_DURATION + 20;
            setTimeout(() => nextCard(), totalTime);
          }
        } else {
          const tmp = {};
          tmp[i] = true;
          setModalIsOpen((prev) => ({ ...prev, ...tmp }));
          return;
        }
        const tmp = {};
        tmp[i] = true;
        totalTime += ANIMATION_DURATION * 3;
        setTimeout(
          () => setModalIsOpen((prev) => ({ ...prev, ...tmp })),
          totalTime
        );
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

  const transformCards = () => {
    let counterLeft = middleCard;
    let counterRight = 1;

    for (let i = 0; i <= totalCardIndex; i++) {
      if (i < middleCard) {
        cardContainer.current.children[i].style.transform = `scale(${Math.pow(
          CARD_SCALE,
          counterLeft
        )}) translateY(${TRANSLATE_Y + counterLeft-- * 12}px)`;
      } else if (i > middleCard) {
        cardContainer.current.children[i].style.transform = `scale(${Math.pow(
          CARD_SCALE,
          counterRight
        )}) translateY(${TRANSLATE_Y + counterRight++ * 12}px)`;
      } else {
        cardContainer.current.children[
          middleCard
        ].style.transform = `scale(1) translateY(${TRANSLATE_Y}px)`;
      }
    }
  };

  const nextCard = () => {
    if (!inProgress && cardContainer.current) {
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
        if (cardContainer.current) {
          cardContainer.current.children[0].style.left = lastCardLeft;
          cardContainer.current.children[0].style.zIndex = lastCardZIndex;
          cardContainer.current.append(cardContainer.current.children[0]);
        }

        setTimeout(() => {
          if (cardContainer.current) {
            cardContainer.current.children[
              totalCardIndex
            ].style.transitionDuration = "0.2s";
            cardContainer.current.children[
              totalCardIndex
            ].style.transform = lastCardTransform;

            inProgress = false;
          }
        }, 10);
      }, ANIMATION_DURATION);
    }
  };

  const previousCard = () => {
    if (!inProgress && cardContainer.current) {
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
        if (cardContainer.current) {
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
        }

        setTimeout(() => {
          if (cardContainer.current) {
            cardContainer.current.children[0].style.transitionDuration = "0.2s";
            cardContainer.current.children[0].style.transform = firstCardTransform;

            inProgress = false;
          }
        }, 10);
      }, ANIMATION_DURATION);
    }
  };

  const onDown = (e) => {
    parentRef.current.classList.remove("cursor-grab");
    parentRef.current.classList.add("cursor-grabbing");
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
    parentRef.current.classList.remove("cursor-grabbing");
    parentRef.current.classList.add("cursor-grab");
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
        className="absolute w-1/6 transition transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2"
      >
        {projectList.map((project, i) => (
          <Card
            key={i}
            bg={project.bg}
            cover={project.cover}
            previews={project.previews}
            title={project.title}
            icons={project.icons}
            cfs={project.cfs}
            demo={project.demo}
            code={project.code}
            index={i}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
