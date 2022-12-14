import ProfileTabs from "../../../components/tabs/profile";
import PrimaryLayout from "../../../components/shared/Layout/primary";

function Profile() {
    return <PrimaryLayout tabs={<ProfileTabs />} />;
}

export default Profile;
