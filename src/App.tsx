import ListGroup from "./assets/components/ListGroup";
import Button from "./assets/components/Button";
import Alert from "./assets/components/Alert";
import Like from "./assets/components/Like/Like"
import {useState} from "react";
import ExpandableText from "./assets/components/ExpandableText";


function App() {
    let items = [
        'New york',
        'Dhaka',
        'Berlin',
        'London'
    ];

    let [alertText, setAlertText] = useState("");
    let [alertVisible, setAlertVisibility] = useState(false);

    const handleSelectItem = (item: string) => {
        console.log(item, "Selected");
    };

    const handleCloseButtonClick = () => {
        setAlertVisibility(false);
    };

    const handleButtonClick = (button: string) => {
        setAlertText(button + ' is clicked!');
        setAlertVisibility(true);

    };
    return (
        <div className="container">
            {alertVisible && <Alert onclick={handleCloseButtonClick}>{alertText}</Alert>}
            <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
            <Like></Like>
            <Button text="Primary Button" color="primary" onClick={handleButtonClick}></Button>
            <Button text="Secondary Button" color="secondary" onClick={handleButtonClick}></Button>
            <Button text="Danger Button" color="danger" onClick={handleButtonClick}></Button>

            <ExpandableText maxChars={120}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ExpandableText>
        </div>);
}

export default App;