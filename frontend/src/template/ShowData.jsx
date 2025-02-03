import React from 'react';
import { useProductStore } from '../store/Store';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ShowData = ({ product }) => {

    const { deleteproduct } = useProductStore();
    const handledelet = async (pid) => {

        const res = await deleteproduct(pid);

        if (res.success) {
            alert("Product deleted successfully!");
        } else {
            alert("Failed to delete product");
        }




    }
    return (
        <div>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action Delete /Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr border="1">
                        {/* <td>{product._id}</td> */}
                        <td>{product.name}</td>
                        <td><img src={product.image} alt={product.name} width="50" /></td>
                        <td>{product.price}</td>  {/* Fixed 'prices' to 'price' */}
                        <td>{product.desc}</td>
                        <td><button class="btn btn-danger" onClick={() => handledelet(product._id)} >Delete</button>
                            <Link class="btn btn-primary" to={`/Update/${product._id}`}>Update</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ShowData;
