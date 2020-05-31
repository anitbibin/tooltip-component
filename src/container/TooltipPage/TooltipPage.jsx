import React from 'react';
import Tooltip from '../../components/Tooltip/Tooltip';
import './TooltipPage.scss';

const tooltipPage = () => {
    return (
        <div className="tooltip-page">
            <div className="tooltip-page-row">
                <Tooltip position="bottom left" title="This is a tooltip" />
                <Tooltip position="bottom centre" title="This is a tooltip" />
                <Tooltip position="bottom right" title="This is a tooltip" />
            </div>
            <div className="tooltip-page-row">
                <Tooltip position="top left" title="This is a tooltip" />
                <Tooltip position="top centre" title="This is a tooltip" />
                <Tooltip position="top right" title="This is a tooltip" />
            </div>
            <div className="tooltip-page-row">
                <Tooltip position="top left" title="This is a tooltip" />
                <Tooltip position="top centre" title="This is a tooltip" />
                <Tooltip position="top right" title="This is a tooltip" />
            </div>
        </div>
    );
};

export default tooltipPage;
