import "./popUp.css";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner" style={{maxWidth: props.maxWidth}}>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                { props.children }
            </div>
        </div>
    ) : ""
};

export default Popup;