import './Input.scss';
import cn from "classnames";
export default function Input(props) {
    const {
        labelText,
        type = 'text',
        placeholder,
        name,
        errorMessage,
        ...restProps
    } = props;
    return (
        <>
            <label className={cn("form-item", {'has-error': errorMessage})} >
                <p className="label-text">{labelText}</p>
                <input type={type} name={name} placeholder={placeholder} {...restProps} />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </label>
        </>
    );
};