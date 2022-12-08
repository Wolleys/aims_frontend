import { useContext } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ThemeContext } from "../../../../context/ThemeContextProvider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function StyledDatePicker({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const popper = {
        "& .MuiPaper-root": {
            marginTop: "5px",
            boxShadow: "none",
            borderRadius: "4px",
            backgroundColor: theme === "light" ? "#ffffff" : "#161B22",
            border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
        },
        "& .MuiCalendarPicker-root": {},
        "& .MuiPickersCalendarHeader-root": {},
        "& .MuiDayPicker-header": {
            // backgroundColor: theme === "light" ? "#ffffff" : "#161B22",
            backgroundColor: theme === "light" ? "#f6f8fa" : "#0d1117",
            borderTop: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
            borderBottom: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
        },
        "& .MuiDayPicker-weekDayLabel": {
            color: theme === "light" ? "#24292f" : "#c9d1d9",
        },
        "& .MuiPickersCalendarHeader-labelContainer": {
            fontSize: "14px",
            fontWeight: 600,
            color: theme === "light" ? "#24292f" : "#c9d1d9",
        },
        "& .MuiSvgIcon-root": {
            color: theme === "light" ? "#5046e4" : "#8b949e",
        },
        "& .MuiPickersDay-root": {
            backgroundColor: "inherit",
            color: theme === "light" ? "#24292f" : "#c9d1d9",
        },
        "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {
            color: "#fff",
            background: theme === "light" ? "#5046e4" : "#8b949e",
        },
        "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected.MuiPickersDay-dayWithMargin.MuiPickersDay-today": {
            color: "#fff",
            background: theme === "light" ? "#5046e4" : "#8b949e",
        },
        "& .PrivatePickersYear-yearButton": {
            fontSize: "14px",
            color: theme === "light" ? "#24292f" : "#c9d1d9",
        },
        "& .PrivatePickersYear-yearButton.Mui-selected.css-3eghsz-PrivatePickersYear-button": {
            color: "#fff",
            background: theme === "light" ? "#5046e4" : "#8b949e",
        },
    };

    const input = {
        "& .MuiSvgIcon-root": {
            color: "#5046e4",
            fontSize: "large",
        },
    };

    const defaultProps = {
        disableFuture: true,
        inputFormat: "MM/DD/YYYY",
        showDaysOutsideCurrentMonth: false,
        PopperProps: {
            sx: popper,
        },
        InputProps: {
            sx: input,
        },
        components: {
            OpenPickerIcon: CalendarMonthIcon,
            LeftArrowIcon: ArrowLeftIcon,
            RightArrowIcon: ArrowRightIcon,
        },
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker {...defaultProps} {...props} />
        </LocalizationProvider>
    );
}
