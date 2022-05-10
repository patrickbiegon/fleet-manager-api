import { Link } from "react-router-dom"
import Ilustration from "../../../assets/media/illustrations/sigma-1/17.png"

const ServerError = () => (
    <div className="d-flex flex-column flex-root">
        {/*begin::Authentication - Error 500 */}
        <div className="d-flex flex-column flex-column-fluid">
            {/*begin::Content*/}
            <div className="d-flex flex-column flex-column-fluid text-center p-10 py-lg-15">
            {/*begin::Wrapper*/}
            <div className="pt-lg-10 mb-10">
                {/*begin::Logo*/}
                <h1 className="fw-bolder fs-2qx text-gray-800 mb-10">System Error</h1>
                {/*end::Logo*/}
                {/*begin::Message*/}
                <div className="fw-bold fs-3 text-muted mb-15">
                Something went wrong!
                <br />
                Please try again later.
                </div>
                {/*end::Message*/}
                {/*begin::Action*/}
                <div className="text-center">
                    <Link to="/" className="btn btn-lg btn-primary fw-bolder">Go to homepage</Link>
                </div>
                {/*end::Action*/}
            </div>
            {/*end::Wrapper*/}
            {/*begin::Illustration*/}
            <div
                className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
                style={{
                backgroundImage: `url(${Ilustration})`
                }}
            />
            {/*end::Illustration*/}
            </div>
            {/*end::Content*/}
        </div>
        {/*end::Authentication - Error 500*/}
    </div>
)

export default ServerError;