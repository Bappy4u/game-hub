import {useState} from "react";
import Button from "./Button";

interface props {
    children: string;
    maxChars?: number;

}

const ExpandableText = ({children, maxChars = 100}: props) => {
    let [textLength, setMaxChars] = useState(children.length < maxChars || maxChars < 5 ? 100 : maxChars);
    let [buttonText, setButtonText] = useState("Show More");

    let handleButtonClick = () => {
        let length = textLength === children.length ? maxChars : children.length;
        let text = textLength === children.length ? "Show More" : "Show Less";

        setButtonText(text);
        setMaxChars(length);
    };

    return (
        <>
            <div>
                {children.slice(0, textLength)} {textLength < children.length && '...'}
                <Button onClick={handleButtonClick} text={buttonText} color={'secondary'}/>
            </div>

        </>
    );
};

export default ExpandableText;