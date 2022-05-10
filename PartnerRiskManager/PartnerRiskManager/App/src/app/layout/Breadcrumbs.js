import { Link } from "react-router-dom";

const Breadcrumbs = ({options}) => {
    return (
        <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
            <div id="kt_toolbar_container" className="container-xxl d-flex flex-stack flex-wrap">
                <div className="page-title d-flex flex-column me-3">
                    {/* <h1 className="d-flex text-white fw-bolder my-1 fs-3">{options.title}</h1> */}
                    <h1 className="d-flex text-white fw-bolder my-1 fs-3">Breadcrumbs</h1>
                    <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                        <li className="breadcrumb-item text-white opacity-75">
                            {/* <Link to="/" className="text-white text-hover-primary">Home</Link>
                            &nbsp; &nbsp; - &nbsp; &nbsp;
                            <Link to="/partners" className="text-white text-hover-primary">partners</Link>
                            &nbsp; &nbsp; - &nbsp; &nbsp;
                            <Link to="/users" className="text-white text-hover-primary">Users</Link>
                            &nbsp; &nbsp; - &nbsp; &nbsp; */}
                            <Link to="/not-found" className="text-white text-hover-primary">404</Link>
                            &nbsp; &nbsp; - &nbsp; &nbsp;
                            <Link to="/error" className="text-white text-hover-primary">500</Link>
                        </li>
                        {/* {options.links.map((link, index) => (
                            <li key={index} className="breadcrumb-item text-white opacity-75">
                                <span className="bullet bg-white opacity-75 w-5px h-2px" style={{marginRight: 7}}></span>
                                <Link to={link.to} className="text-white text-hover-primary">{link.title}</Link>
                            </li>
                        ))}                         */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs;