import { InputAdornment } from "@mui/material";
import StyledSearchTextField from "./StyledSearchTextField";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchTextField = ({ ...otherProps }) => {
    const input = {
        endAdornment: (
            <InputAdornment position="end">
                <SearchOutlinedIcon />
            </InputAdornment>
        ),
        sx:{
            cursor: "pointer",
            borderRadius: "0 4px 4px 0",
            padding: "0px 10px 0px 0px" ,
        }
    };

    const configTextField = {
        ...otherProps,
        InputProps: input,
    };

    return <StyledSearchTextField {...configTextField} />;
};

export default SearchTextField;
