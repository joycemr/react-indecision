import React from "react";

const Header = (props) => (
        <div id='header'>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );

Header.defaultProps = {
    title: 'Indecision Application'
}

export default Header;
