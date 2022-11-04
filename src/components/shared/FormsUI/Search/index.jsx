import StyledSearchTextField from "./StyledSearchTextField";

const SearchTextField = ({ ...otherProps }) => {
    const configTextField = {
        type: "search",
        size: "small",
        ...otherProps,
        variant: "outlined",
        placeholder: "Search..."
    };

    return <StyledSearchTextField {...configTextField} />
};

export default SearchTextField;
