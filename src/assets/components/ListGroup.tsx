import {useState} from "react";

interface props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: props) {


    let [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {!items.length ? <p>no item found </p> : null}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item' }>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;