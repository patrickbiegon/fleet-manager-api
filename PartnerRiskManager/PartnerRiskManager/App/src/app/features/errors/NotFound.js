import { Link } from "react-router-dom";
import NotFoundImg from "../../../assets/media/illustrations/sigma-1/18.png";

const NotFound = () => (
    <div className="d-flex flex-column flex-root">
        {/*begin::Authentication - 404 Page*/}
        <div className="d-flex flex-column flex-center flex-column-fluid" style={{marginTop: 100}}>
        {/*begin::Illustration*/}
        <img
            src={NotFoundImg}
            alt=""
            className="mw-100 mb-10 h-lg-450px"
        />
        {/*end::Illustration*/}
        {/*begin::Message*/}
        <h1 className="fw-bold mb-10" style={{ color: "#A3A3C7" }}>
            Seems there is nothing here
        </h1>
        {/*end::Message*/}
        {/*begin::Link*/}
        <Link to="/" className="btn btn-primary">
            Return Home
        </Link>
        {/*end::Link*/}
        </div>
        {/*end::Authentication - 404 Page*/}
    </div>
)

export default NotFound;