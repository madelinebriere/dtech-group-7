import React from "react";

export const ProgressBar = () => {
    return (
        <div className="pb-container">
            <div className="progress-bar">
                <div className="progress-bar-fill"></div>
            </div>
            <div className="progress-label">80%</div>
        </div>
    )
}