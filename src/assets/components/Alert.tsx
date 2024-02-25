interface props {
    children: string;
    onclick: () => void;

}
function Alert({children, onclick}: props) {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {children}
            <button onClick={onclick} type="button" className="btn-close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );

}

export default Alert;