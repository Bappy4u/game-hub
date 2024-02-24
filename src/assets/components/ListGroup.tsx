function ListGroup() {
    let items = [
        'New york',
        'Dhaka',
        'Berlin',
        'London'
    ];


    return (
        <>
            <h1>List</h1>
            { !items.length? <p>no item found </p>: null}
            <ul className="list-group">
                {items.map(item => (
                    <li key={item} className='list-group-item'>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;