import React, {ReactNode} from 'react';

import {Link} from 'react-router-dom';

interface propsHeader {
    children?: ReactNode;
    additionalClasses?: string;
}

function Header (props: propsHeader) {
    return <div className={`z-index-high bg-primarylight w-100 h-auto ${props.additionalClasses}`}>
        <div className="container">
            <div className="row my-1 my-md-3">
                <div className="d-none d-md-block col-md-auto">
                    
                </div>
                <div className="col d-flex">
                    <span className="m-auto h1"><Link to={"/"}>Magic Judge Program Europe</Link></span>
                </div>
                <div className="col-auto d-flex">
                    <span className="m-auto"><button className="btn btn-primary">log in</button></span>
                </div>
            </div>
        </div>
    </div>
}

export default function (props: propsHeader) {
    return <>
        {/*So we have to be hacking a bit because sticky doesn't seem to work...*/}
        {Header({...props, additionalClasses: "position-fixed top-0"})}
        {Header({...props, additionalClasses: "invisible"})}
    </>
}