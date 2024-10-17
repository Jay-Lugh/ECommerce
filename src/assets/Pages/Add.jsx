import { useNavigate } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
function Add() {
    const navigate = useNavigate(); 

    const handleBack = () => {
        navigate('/productlist'); 
    };
    const confirmAdd = () => {
        //ADD HERE THE CODE FOR ADDING
        navigate('/productlist'); 
    };

    return (
        <div>
            <h2>Add Item </h2>
            <button onClick={handleBack}>
            <GiCancel />
                </button>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder='Product Name' />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text"   placeholder='Product Category' />

                </div>
                <div>
                    <label>Description:</label>
                    <textarea  placeholder='Product Description'></textarea>

                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" placeholder='Product Quantity' />

                </div>
                <div>
                    <label>Price:</label>
                    <input type="text"   placeholder='Product Price' />

                </div>
                <button type="submit" onClick={confirmAdd}>Save</button>
            </form>
        </div>
    );
}

export default Add;
