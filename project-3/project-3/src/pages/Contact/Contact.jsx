import "./Contact.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AttachmentIcon from "@mui/icons-material/Attachment";
import MessageIcon from "@mui/icons-material/Message";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Perform form validation here
    const validationErrors = {};
    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
        validationErrors.email = "Enter a valid email address";
    }
    if (subject.trim() === "") {
      validationErrors.subject = "Subject is required";
    }
    if (message.trim() === "") {
      validationErrors.message = "Message is required";
    }
    setErrors(validationErrors);

    // If there are no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2.4 }}>
          <PersonIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "white",
              },
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiFormLabel-root": { color: "white" },
              "& .MuiFormLabel-root.Mui-focused": { color: "white" },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2.4 }}>
          <EmailIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            inputProps={{
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
              title: "Enter a valid email address",
            }}
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "white",
              },
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiFormLabel-root": { color: "white" },
              "& .MuiFormLabel-root.Mui-focused": { color: "white" },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2.4 }}>
          <AttachmentIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Subject"
            variant="standard"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            error={!!errors.subject}
            helperText={errors.subject}
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "white",
              },
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiFormLabel-root": { color: "white" },
              "& .MuiFormLabel-root.Mui-focused": { color: "white" },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2.4 }}>
          <MessageIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Message"
            variant="standard"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={!!errors.message}
            helperText={errors.message}
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "white",
              },
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiFormLabel-root": { color: "white" },
              "& .MuiFormLabel-root.Mui-focused": { color: "white" },
            }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            marginTop: "40px",
            borderRadius: "15px",
            "&:hover": {
              backgroundColor: "#d4af37",
            },
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact;
