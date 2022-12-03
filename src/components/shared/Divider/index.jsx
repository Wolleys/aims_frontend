import { useContext } from "react";
import { Divider } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function ThemeDivider() {
  const { theme } = useContext(ThemeContext);
  const dividerStyle = {
    mb: 2,
    mt: 0,
    borderBottom:
      theme === "light" ? "thin solid #0000001f" : "thin solid #21262d",
  };
  return <Divider sx={dividerStyle} />;
}

export default ThemeDivider;
