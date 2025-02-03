import React, { useEffect } from 'react';
import { useProductStore } from '../store/Store';
import ShowData from './ShowData';  // ✅ Corrected import

const Addnew = () => {
    const { fetchproducts, products } = useProductStore();

    useEffect(() => {
        fetchproducts();
    }, []);

    useEffect(() => {
        console.log("Updated products:", products);
    }, [products]);
    const mystyle = {
        textAlign: "center"
    }

    return (
        <div style={mystyle}>
            {products.length > 0 ? (
                products.map((product) => (
                    <ShowData key={product._id} product={product} />
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default Addnew;
