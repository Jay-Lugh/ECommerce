import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
function Edit() {
    const navigate = useNavigate(); 

    const handleBack = () => {
        navigate('/productlist'); 
    };
    const confirmEdit = () => {
        //ADD HERE THE CODE FOR EDITING
        navigate('/productlist'); 
    };
    const location = useLocation();
    const purchase = location.state;
    console.log(location.state);


    return (
        <div>
            <h2>Edit Item</h2>
            <button onClick={handleBack}>
            <GiCancel />
                </button>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" defaultValue={purchase.name} />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" defaultValue={purchase.category} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea defaultValue={purchase.description}></textarea>
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" defaultValue={purchase.qty} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" defaultValue={purchase.price} />
                </div>
                <button type="submit" onClick={confirmEdit}>Save</button>
            </form>
        </div>
    );
}

export default Edit;
