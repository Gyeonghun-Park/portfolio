import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import Map from "./Map";

const Contact = () => {
  return (
    <PageContainer
      left={
        <TextCotainer sentence="Hello, I'm Gyeonghun, passionate Student, and Developer!!" />
      }
      right={
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div className="h-full w-full" />}
          containerElement={<div className="h-full w-full" />}
          mapElement={<div className="h-full w-full" />}
        />
      }
    />
  );
};

export default Contact;
