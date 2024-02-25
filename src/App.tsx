import ListGroup from "./assets/components/ListGroup";
import Button from "./assets/components/Button";
import Alert from "./assets/components/Alert";
import {useState} from "react";


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
            <Button text="Primary Button" color="primary" onClick={handleButtonClick}></Button>
            <Button text="Secondary Button" color="secondary" onClick={handleButtonClick}></Button>
            <Button text="Danger Button" color="danger" onClick={handleButtonClick}></Button>
        </div>);
}

export default App;