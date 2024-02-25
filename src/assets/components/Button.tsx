interface props {
    text: string;
    color?: 'primary' | 'danger' | 'secondary';
    onClick: (text: string) => void;
}

function Button({text, color, onClick}: props) {

    return (<button type="button" onClick={()=> {onClick(text)}} className={"btn btn-" + color}>{text}</button>);
}

export default Button;