import React from "react";
import { Link } from "react-router-dom";

const MailTo = ({ mailto, label }) => {
    return (
        <>
            <Link
                to='mailto:max.mustermann@example.com'
                onClick={(e) => {
                    window.location = mailto;
                    e.preventDefault();
                }}
            >
                {mailto}
            </Link>
        </>
    );
}

export default MailTo;