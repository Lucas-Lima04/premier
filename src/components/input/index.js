import './style.css';

function Input({placeholder, type, rows}) {
    if (type === "textarea") {
        return (
            <textarea placeholder={placeholder} rows={rows || "3"} cols="50">
            </textarea>
        )
    } else {
        return (
            <input type={type} placeholder={placeholder}/>
        )
    }
}

export default Input;