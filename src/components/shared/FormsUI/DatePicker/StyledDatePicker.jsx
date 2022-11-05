// import TodayIcon from "@mui/icons-material/Today";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const popper = {
    "& .MuiPaper-root": {
        marginTop: "5px",
        boxShadow: "none",
        borderRadius: "4px",
        border: "1px solid #d5d8e1",
    },
    "& .MuiCalendarPicker-root": {},
    "& .MuiPickersCalendarHeader-root": {},
    "& .MuiPickersCalendarHeader-labelContainer": {
        color: "#444",
        fontSize: "14px",
        fontWeight: 600,
    },
    "& .MuiPickersDay-root": {
        color: "#666",
    },
    "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected.MuiPickersDay-dayWithMargin.MuiPickersDay-today": {
        color: "#fff",
        backgroundColor: "#5046e4",
    },
    "& .PrivatePickersYear-yearButton": {
        color: "#666",
        fontSize: "14px",
    },
    "& .PrivatePickersYear-yearButton.Mui-selected.css-3eghsz-PrivatePickersYear-button": {
        color: "#fff",
        backgroundColor: "#5046e4",
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

export default function StyledDatePicker({ ...props }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker {...defaultProps} {...props} />
        </LocalizationProvider>
    );
}
