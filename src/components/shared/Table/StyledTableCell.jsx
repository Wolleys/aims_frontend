import { TableCell, tableCellClasses, styled } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#EBEBEB",
        color: theme.palette.text.primary,
        fontSize: 14,
        paddingTop: "10px",
        paddingBottom: "10px",
        fontWeight: "500",
        cursor: "default",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function CssTableCell({ ...props }) {
    return <StyledTableCell {...props} />;
}
