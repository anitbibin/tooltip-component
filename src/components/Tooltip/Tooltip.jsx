import React from 'react';
import './Tooltip.scss';

const tooltip = (props) => {
    return (
        <div className={`tooltip ${props.position}`} data-tooltip={`${props.title}`}>
            <a href="#">Open tooltip</a>
        </div>
    )
}

export default tooltip;