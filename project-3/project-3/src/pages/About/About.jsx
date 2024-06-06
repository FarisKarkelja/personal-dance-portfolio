import React from "react";
import "./About.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import profileImage from "../../assets/images/image1.jpg";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function About() {
  return (
    <div className="about">
      <img src={profileImage} alt="Profile" className="profileImage" />
      <Card className="card">
        <CardContent>
          <Typography variant="h5" component="div" className="aboutTitle">
            About Me
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="content"
          >
            Hi! My name is Faris Karkelja, a 20-year-old salsa dancer based in
            Sarajevo, Bosnia and Herzegovina.
          </Typography>
          <div className="buttonContainer">
            <CustomizedDialogs />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ borderColor: "black" }}
        className="readMoreBtn"
      >
        Read More
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          About Me
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Hi! My name is Faris Karkelja, a 20-year-old salsa dancer based in
            Sarajevo, Bosnia and Herzegovina. In 2021, I had the opportunity to
            showcase my talent on the mesmerizing platform of the Supertalent
            Show held in Zagreb, the capital city of Croatia.
          </Typography>
          <Typography gutterBottom>
            This experience was a crucial moment in my dance career, igniting a
            renewed sense of motivation that has fueled my continuous growth and
            improvement ever since.
          </Typography>
          <Typography gutterBottom>
            Apart from my passion for the art of dance, I have a deep interest
            in various technological domains. Alongside my dance journey, I am
            currently engaged in higher education, focusing on Information
            Technology at the university level.
          </Typography>
          <Typography gutterBottom>
            Balancing my love for dance with my academic pursuits has been a
            rewarding challenge. When I'm not dancing or studying, I enjoy
            exploring the latest advancements in tech. I believe that my diverse
            interests allow me to bring a unique perspective to both fields.
          </Typography>
          <Typography gutterBottom>
            My goal is to merge my creative talents with my technical skills to
            innovate and inspire. I'm excited about the future and eager to see
            where my passions for dance and technology will take me.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className="readLessBtn">
            Read less
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default function AboutPage() {
  return (
    <div>
      <About />
    </div>
  );
}
