import {FaRegHeart} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import {useState} from "react";



function Like() {

    let [liked, setLike] = useState(false);

    let handleClick = () => {
        console.log("Hello");
        setLike(!liked);
    }
    return (
        <>
            { !liked && <FaRegHeart
                onClick={handleClick}></FaRegHeart>}
            { liked && <FaHeart onClick={handleClick}></FaHeart>}
        </>

    );
}

export default Like;