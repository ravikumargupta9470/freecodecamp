import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function Update() {

    const { id } = useParams();
    //console.log(id);


    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [prices, setPrices] = useState(0);
    const [desc, setDesc] = useState(0);
    console.log(name, image, prices, desc);

    ///
    const handlesubmit = async (e) => {
        e.preventDefault();

        const adduser = { name, image, prices, desc };



        const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/update/${id}`, {
            method: 'POST',
            body: JSON.stringify(adduser),
            headers: {
                "Content-Type": "application/json",
            }

        })


        const re = await res.json();
        console.log(re);
        if (re) {
            console.log("Data submited")
            alert('Data Updated')

        }
        else {
            console.log("date submiited failed");
        }

    }



    const getonedata = async () => {


        const user = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/updatedetails/${id}`, {
            method: 'GET',
        });

        const res = await user.json();
        //console.log(res.data.age);
        if (res) {

            setName(res.data.name);
            setImage(res.data.image);
            setPrices(res.data.prices);
            setDesc(res.data.desc);
        }



    }



    //same code with axios
    // const handlesubmit = async (e) => {
    //   e.preventDefault();
    //   const adduser = { name, email, age };

    //   try {
    //     const response = await axios.post("http://localhost:4000/api/", adduser, {
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     });

    //     if (response.status === 200) {
    //       console.log("Data submitted");
    //     } else {
    //       console.log("Data submission failed");
    //     }
    //   } catch (error) {
    //     console.log("Data submission failed:", error.message);
    //   }
    // };
    useEffect(() => {

        getonedata();
    }, []);




    return (
        <div className="container">
            <h2>Update Details</h2>
            <form onSubmit={handlesubmit} >

                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='email' value={image} onChange={(e) => setImage(e.target.value)} />

                <input type="text" placeholder='age' value={prices} onChange={(e) => setPrices(e.target.value)} />
                <input type="text" placeholder='age' value={desc} onChange={(e) => setDesc(e.target.value)} />
                <input type="submit" name="submit" value="Save" className="btn btn-primary" />



            </form>
        </div>
    )
}

export default Update