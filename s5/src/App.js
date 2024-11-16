import React, { useState } from 'react';
import './App.css';
import Card from './Card';


function App() {
  const tutorialData = [
    { image: "/sprint-5.svg/time_managment.svg", title: 'Devotes many houres', description: 'A minimum of 30 hours a week if you do not understand enough you will have to devote more hours to it. At first it seems impossible, but you will notice an improvement quickly.' , backgroundColor: "rgba(47, 172, 181, 0.92)"},
    { image: "/sprint-5.svg/programming.svg", title: 'Program oun project', description: '10 hours working on your own projects is better than 10 hours watching tutorials. Motivation and involvement in the project will help accelerate your learning.' , backgroundColor: "rgba(211, 221, 222, 0.92)"},
    { image: "/sprint-5.svg/meditation.svg", title: 'Try to rest', description: 'Resting well and disconnecting are vital. In this way you will reduce your stress and anxiety. You will improve your concentration and consolidate your learning.' , backgroundColor: "#f4de36eb"}
  ];

  const [step, setStep] = useState(0);
  const [animation, setAnimation] = useState('');

  const changeStep = (newStep) => {
    if(newStep > step){
      setAnimation('slide-out-left');
      setTimeout(() => {
        setStep(newStep);
        setAnimation('slide-in-right');
      }, 300);
    } else {
      setAnimation('slide-out-right');
      setTimeout(() => {
        setStep(newStep);
        setAnimation('slide-in-left');
      }, 300);
    }
  };
  const nextStep = () => {
    if (step < tutorialData.length - 1) {
      setStep(step + 1);
      setAnimation('slide-out-left');
      setTimeout(() => {
        setStep(step + 1);
        setAnimation('slide-in-right');
      }, 300);
    }
  }
  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
      setAnimation('slide-out-right');
      setTimeout(() => {
        setStep(step - 1);
        setAnimation('slide-in-left');
      }, 300);
    }
  }

  const currentStep = tutorialData[step];

  return (
    <Card 
    image={currentStep.image} 
    title={currentStep.title} 
    description={currentStep.description} 
    prevStep={step > 0 ? prevStep : null} 
    nextStep={step < tutorialData.length - 1 ? nextStep : null} 
    backgroundColor={currentStep.backgroundColor}
    totalSteps={tutorialData.length} 
    currentSteps={step}
    onStepChange={changeStep}
    animation={animation}
    />
  );
}

export default App;
