import './Button.scss';

export default function Button({type = "button", classNames = "", onClick, children}) {
    return (
        <button type={type} className={classNames} onClick={onClick}>
            {children}
        </button>
    );
};