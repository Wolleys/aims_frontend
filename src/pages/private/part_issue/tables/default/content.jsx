import IssuedPartsList from "./issuedPartsList";
import IssuePart from "../../forms/default/issuePart";
import { Fragment, useContext, useState } from "react";
import EditIssuedPart from "../../forms/default/editIssuedPart";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { ThemeContext } from "../../../../../context/ThemeContextProvider";
import { SelectedJobContext } from "../../../../../context/SelectedJobContextProvider";

function IssueContent() {
  const { theme } = useContext(ThemeContext);
  const { selectedJob } = useContext(SelectedJobContext);

  const [editing, setEditing] = useState(false);

  const editRow = (part) => {
    setEditing(true);
    console.log(part.id);
  };

  const jobNo = (
    <span>
      Job No:{" "}
      <span style={{ color: theme === "light" ? "#57606a" : "#8b949e" }}>
        {selectedJob.job_number}
      </span>
    </span>
  );
  const aircraftReg = (
    <span>
      Aircraft Reg:{" "}
      <span style={{ color: theme === "light" ? "#57606a" : "#8b949e" }}>
        {selectedJob.aircraft_reg}
      </span>
    </span>
  );
  const subHeader = (
    <span>
      Aircraft Reg:{" "}
      <span style={{ color: theme === "light" ? "#57606a" : "#8b949e" }}>
        {selectedJob.aircraft_reg}
      </span>
    </span>
  );

  const cardStyle = {
    borderRadius: "4px",
    backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
    border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
  };

  const defaultProps = {
    elevation: 0,
    sx: cardStyle,
    variant: "outlined",
  }

  return (
    <Fragment>
      <Card {...defaultProps}>
        <CardHeader
          title={jobNo}
          titleTypographyProps={{
            fontSize: "14px", fontWeight: "600",
            color: theme === "light" ? "#24292f" : "#c9d1d9"
          }}
          subheader={subHeader}
          subheaderTypographyProps={{
            fontSize: "14px",
            fontWeight: "600",
            display: { xs: "grid", sm: "none" },
            color: theme === "light" ? "#24292f" : "#c9d1d9"
          }}
          action={
            <Typography
              sx={{
                textTransform: "none",
                fontSize: "14px",
                fontWeight: "600",
                display: { xs: "none", sm: "grid" },
                color: theme === "light" ? "#24292f" : "#c9d1d9"
              }}
            >
              {aircraftReg}
            </Typography>
          }
        />
        <CardContent sx={{ mt: "0px" }}>
          {editing ? <EditIssuedPart setEditing={setEditing} /> : <IssuePart />}
          <IssuedPartsList editRow={editRow} />
        </CardContent>
      </Card>
    </Fragment>
  );
}
export default IssueContent;
