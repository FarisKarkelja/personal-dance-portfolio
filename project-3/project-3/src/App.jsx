import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Grid from "@mui/material/Grid";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#cccccc',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ffff8d',
      main: '#ffeb3b',
      dark: '#c8b900',
      contrastText: '#000000',
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
