import React from "react";

const Action = (props) => (
        <div id='action'>
            <button
                className="big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );

export default Action;
