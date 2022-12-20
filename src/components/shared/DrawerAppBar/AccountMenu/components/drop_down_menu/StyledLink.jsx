import { Link } from "react-router-dom";

function StyledLink({ children, ...props }) {
    const linkStyle = {
        color: "inherit",
        textDecoration: "none",
    }
    return <Link style={linkStyle} {...props}>{children}</Link>;
}

export default StyledLink;
