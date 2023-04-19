
import './ButtonsPanel.css';

const ButtonsPanel = (props) => {
    return (
        <div className="buttonsPanel">
            <button onClick={() => props.updateCounter('add')}>Add {props.step}</button>
            <button onClick={() => props.updateCounter('renit')}>Relnit</button>
            <button onClick={() => props.updateCounter('zero')}>Reset</button>
        </div>
    );
}
export default ButtonsPanel;