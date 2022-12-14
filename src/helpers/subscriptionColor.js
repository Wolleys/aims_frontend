import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export function SubscriptionColor(difference) {
  const { theme } = useContext(ThemeContext);

  return difference <= 14 && difference > 7
    ? { color: "#4caf50" }
    : difference <= 7
    ? { color: "#dc004e" }
    : { color: theme === "light" ? "#24292f" : "#c9d1d9" };
}
