import "./Loader.scss";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="loader">
      {/* <Spinner animation="border" variant="primary" /> */}
      <Spinner
        animation="border"
        size="sm"
        variant="success"
        className="mx-1"
      />
      <Spinner animation="border" variant="danger" className="mx-1" />
      <Spinner animation="grow" size="sm" variant="warning" className="mx-1" />
      <Spinner animation="grow" variant="info" className="mx-1" />
    </div>
  );
};

export default Loader;
