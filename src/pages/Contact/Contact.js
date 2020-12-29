import PageContainer from "../../components/Container";
import Email from "./Left/Email";
import Map from "./Right/Map";

const Contact = () => {
  return (
    <PageContainer
      left={<Email />}
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
