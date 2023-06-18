import { useRef } from "react";
import '../../Assets/CSS/Checkout.css';
import { FaMinus, FaPlus } from "react-icons/fa";
function Quantity({onHandle})
{
    const countRef = useRef(0);

    const increaseQuantity = () =>
    {
         const addCount = countRef.current + 1;
        onHandle(addCount);
        countRef.current = addCount;
    }
    const decreaseQuantity = () =>
    {
 
        if(countRef.current > 0)
        {
            const removeCount = countRef.current - 1;
            onHandle(removeCount);
            countRef.current = removeCount;
        }
    }
    return(
        <div className="count-div">
            
            <button onClick={decreaseQuantity}> <FaMinus /> </button>
            <h6 className="count-value">{}</h6>
            <button onClick={increaseQuantity}> <FaPlus /> </button>
        </div>
    )
}
export default Quantity;