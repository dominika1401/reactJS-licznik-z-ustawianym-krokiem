import { useState } from 'react';
import ButtonsPanel from './ButtonsPanel';
import './Counter.css';
import Display from './Display';
import Step from './Step';

const Counter = (props) => {
    const [counter, setCounter] = useState(props.initValue);
    const [step, setStep] = useState(1);


    const updateCounter = (action) => {
        if (action === 'add') {
            setCounter(counter + step);
        } else if (action === 'renit') {
            setCounter(props.initValue);
        } else {
            setCounter(0);
        }
    }
    const updateStep = (event) => {
        setStep(+event);
    };


    return (
        <div className="counter">
            <Display counter={counter} />
            <ButtonsPanel updateCounter={updateCounter} step={step} />
            <Step updateStep={updateStep} />
        </div>
    );

}
export default Counter;