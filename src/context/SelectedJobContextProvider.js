import React, { createContext, useState } from "react";

export const SelectedJobContext = createContext(null);

export const SelectedJobContextProvider = ({ children }) => {
    const [selectedJob, setSelectedJob] = useState({
        job_number: "Not selected",
        aircraft_reg: "No aircraft",
    });

    const value = { selectedJob, setSelectedJob };

    return (
        <SelectedJobContext.Provider value={value}>
            {children}
        </SelectedJobContext.Provider>
    );
};
