import React, { createContext, useState } from "react";

export const CloseJobContext = createContext(null);

export const CloseJobContextProvider = ({ children }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };
    const handleCloseDialog = (event, reason) => {
        if (reason !== "backdropClick") {
            setOpenDialog(false);
        }
    };

    const value = { openDialog, handleOpenDialog, handleCloseDialog };

    return (
        <CloseJobContext.Provider value={value}>
            {children}
        </CloseJobContext.Provider>
    );
};
