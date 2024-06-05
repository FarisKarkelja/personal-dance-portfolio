import './Footer.css';

import { useTheme } from '@mui/material/styles';

function Footer() {
  const theme = useTheme();

  return (
    <footer>
      <p style={{ color: theme.palette.primary.main }}>
        &copy; 2024 Faris Karkelja. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
