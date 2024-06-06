import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import "./Home.css";
import CustomFont from "../../assets/PhotographSignature.ttf";

function Home() {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await import("../../assets/data.json");
            setData(response.default.message);
        };

        fetchData();
    }, []);

    return (
        <Container
            className="homeContainer"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <style>
                {`
                    @font-face {
                        font-family: "PhotographSignature";
                        src: url(${CustomFont}) format("truetype");
                    }
    
                    .customh3 {
                        font-family: "PhotographSignature", sans-serif;
                        font-size: 4rem;
                    }
                `}
            </style>
            <Typography variant="h3" className="customh3">Faris Karkelja</Typography>
            <Typography variant="body1">{data}</Typography>
        </Container>
    );
}

export default Home;
