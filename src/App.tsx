import ListGroup from "./assets/components/ListGroup";


function App() {
    let items = [
        'New york',
        'Dhaka',
        'Berlin',
        'London'
    ];
    return <div><ListGroup items={items} heading={"Cities"}/></div>
}

export default App;