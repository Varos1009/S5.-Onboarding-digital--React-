import React from 'react';
import Indicator from './Indicator';


function Card({ image, title, description, prevStep, nextStep, backgroundColor, totalSteps, currentSteps, onStepChange, animation }) {
    return (
        <div className={`container mt-1 d-flex justify-content-center ${animation}`}>
            <div className="card rounded-5">
                <div className="image-wrapper rounded-top-5" style={{ backgroundColor }}>
                    <img src={image} className="card-img-top " alt="..." />
                </div>
                <div className="card-body ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <Indicator totalSteps={totalSteps} currentSteps={currentSteps}  onStepChange={onStepChange}/>
                        <div className="d-flex justify-content-end">
                            {prevStep &&
                                (<button className="btn fs-1" onClick={prevStep}>
                                    <i className="bi bi-arrow-left-circle"></i>
                                </button>)}
                            {nextStep &&
                                (<button className="btn fs-1" onClick={nextStep}>
                                    <i className="bi bi-arrow-right-circle-fill"></i>
                                </button>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;