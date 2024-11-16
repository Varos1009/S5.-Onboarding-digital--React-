import React from "react";


function Indicator({ totalSteps,currentSteps, onStepChange }) {

    
    return (
        <div>
            <div className="indicatorWrapper">
                {Array.from({ length: totalSteps }).map((_, index) =>
                (<div
                    key={index}
                    role="button"
                    className={`dot ${index === currentSteps ? 'active' : ''}`}
                    onClick={() => onStepChange(index)}
                />))}
            </div>
            
        </div>
    );
}

export default Indicator;