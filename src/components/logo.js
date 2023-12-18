import { useTheme } from '@mui/material/styles';
import logo from "../../public/assets/logos/logo.png"

export const Logo = () => {
  const theme = useTheme();

  return (
    <>
      <img src={logo.src} alt="logo-mnc" />
    </>
  );
};
