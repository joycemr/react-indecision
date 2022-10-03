import React from "react";

const Action = (props) => {
    return (
        <div id='action'>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
}

export default Action;
