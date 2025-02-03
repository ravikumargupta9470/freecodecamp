import React, { useState } from "react";
import showdata from "./ShowData";
import Navbar from "./Navbar";
import Form from "react-bootstrap/Form";
import { useProductStore } from "../store/Store";
import Toast from 'react-bootstrap/Toast';

const Home = () => {
    const mystle = {
        marginTop: "10px",
        textAlign: "center",
    };

    const [item, setitem] = useState({
        name: "",
        image: "",
        price: "",
        desc: "",
    });
    const { createPro } = useProductStore();
    async function handlesubmit() {
        const { success, message } = await createPro(item);
        console.log(success);
        console.log(message);

        if (success == true) {
            console.log("Good ");
            alert("data inserted");
        }
        else {
            alert("data insertion failed");
        }

    }

    function handleit() {
        console.log(item);

    }

    return (
        <div>
            <h1>Homepage</h1>
            <div className="container">
                <Form.Control
                    size="lg"
                    type="text"
                    value={item.name}
                    placeholder="Name"
                    onChange={(e) => handleit(setitem({ ...item, name: e.target.value }))}
                />
                <br />
                <Form.Control
                    size="sm"
                    type="text"
                    value={item.image}
                    placeholder="Images"
                    onChange={(e) => handleit(setitem({ ...item, image: e.target.value }))}
                />
                <Form.Control
                    type="text"
                    placeholder="Prices"
                    value={item.price}
                    onChange={(e) => handleit(setitem({ ...item, price: e.target.value }))}
                />
                <br />
                <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Description"
                    value={item.desc}
                    onChange={(e) => handleit(setitem({ ...item, desc: e.target.value }))}
                />
                <button className="btn btn-primary" style={mystle} onClick={handlesubmit}>
                    Create
                </button>
            </div>
        </div>
    );
};

export default Home;
