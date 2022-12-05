import { useContext } from "react";
import { Divider } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function LayoutDivider() {
  const { theme } = useContext(ThemeContext);
  const dividerStyle = {
    mb: 2,
    mt: 0,
    borderBottom: theme === "light" ? "1px solid #d8dee4" : "1px solid #21262d",
  };
  return <Divider sx={dividerStyle} />;
}

export default LayoutDivider;
