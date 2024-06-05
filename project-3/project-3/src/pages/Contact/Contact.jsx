import "./Contact.css";
import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation here
        const validationErrors = {};
        if (name.trim() === "") {
            validationErrors.name = "Name is required";
        }
        if (email.trim() === "") {
            validationErrors.email = "Email is required";
        }
        if (phoneNumber.trim() === "") {
            validationErrors.phoneNumber = "Phone no. is required";
        }
        if (address.trim() === "") {
            validationErrors.address = "Address is required";
        }
        if (message.trim() === "") {
            validationErrors.message = "Message is required";
        }
        setErrors(validationErrors);

        // If there are no validation errors, submit the form
        if (Object.keys(validationErrors).length === 0) {
            // Submit the form
        }
    };

    return (
        <div>
            <h2 className="contactHeading">Contact Me</h2>
            <form onSubmit={handleSubmit}>
            <PersonIcon />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="error">{errors.name}</span>}
                <br />
                <EmailIcon />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
                <br />
                <PhoneIcon />  
                <input
                    type="text"
                    placeholder="Phone No."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && (
                    <span className="error">{errors.phoneNumber}</span>
                )}
                <br />
                <HomeIcon />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && <span className="error">{errors.address}</span>}
                <br />
                <MessageIcon />
                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && <span className="error">{errors.message}</span>}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
