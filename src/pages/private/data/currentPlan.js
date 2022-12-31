import dayjs from "dayjs";
import { SubscriptionColor } from "../../../helpers/subscriptionColor";

export const currentPlan = () => {
    const dateFrom = dayjs(new Date());
    const dateTill = dayjs("2022-12-31 17:15:00");
    const differenceInDays = dateTill.diff(dateFrom, "day");
    const differenceInHrs = dateTill.diff(dateFrom, "hour");
    const differenceInMins = dateTill.diff(dateFrom, "minute");
    const differenceInSecs = dateTill.diff(dateFrom, "second");

    const subscriptionStatus = dateFrom > dateTill ? "Expired"
        : differenceInMins === 0 ? differenceInSecs + " seconds remaining"
        : differenceInMins === 1 ? differenceInMins + " min remaining"
        : differenceInHrs === 0 ? differenceInMins + " mins remaining"
        : differenceInHrs === 1 ? differenceInHrs + " hour remaining"
        : differenceInDays === 0 ? differenceInHrs + " hours remaining"
        : differenceInDays === 1 ? differenceInDays + " day remaining"
        : differenceInDays + " days remaining";

    return [
        { name: "Billing", detail: "Monthly" },
        { name: "Start Date", detail: "01-Dec-2022" },
        { name: "End Date", detail: "31-Dec-2022" },
        {
            name: "Subscription",
            detail: subscriptionStatus,
            state: subscriptionStatus,
            textColor: SubscriptionColor(differenceInDays),
        },
    ];
};
