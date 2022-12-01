import SecondaryLayout from "../../../components/shared/Layout/secondary";
import { CloseJobContextProvider } from "../../../context/CloseJobContextProvider";

function Jobs() {
    return (
        <CloseJobContextProvider>
            <SecondaryLayout />
        </CloseJobContextProvider>
    );
}

export default Jobs;
