import React from 'react';
import PropTypes from 'prop-types';

type PropTypes = {
    disabled: boolean
    buttonName: string
    callback: () => void
    className: string
};

function MyButton(props: PropTypes) {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={props.className}
                disabled={props.disabled}
                onClick={onClickHandler}>
            {props.buttonName}
        </button>
    );
}

export default MyButton;