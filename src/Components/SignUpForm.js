import React, { useState } from 'react';

export const SignUpForm = () => {
    const initData = {
        firstName: "",
        lastName: "",
        email: ""
    }

    const [formData, setFormData] = useState(initData);


    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(formData.firstName !== "" || formData.lastName !== "" || formData.email !== "") {
                alert(`You Entered: 
                First Name: ${formData.firstName}
                Last Name: ${formData.lastName}
                Email: ${formData.email}`);
            
            // removing text input data
            setFormData(initData);
        }else{
            alert("Please fill all the fields")
        }
    }

    return <div>

        <form onSubmit={handleOnSubmit}>
            <p>TubeLight React Form Challenge</p>
            <input name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleOnChange}
            placeholder="Enter First Name"
             />

            <br />

            <input name="lastName"
            type="text"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleOnChange} />

            <br />

            <input name="email"
            placeholder="Enter Email Id"
            type="text"
            value={formData.email}
            onChange={handleOnChange} 
        
            />

            <br />

            <input className="sign-btn" type="submit" value="Sign Up" />

        </form>
        
    </div>
}
