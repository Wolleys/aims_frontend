import dayjs from "dayjs";
import { SubscriptionColor } from "../../../../helpers/subscriptionColor";

export const currentPlan = () => {
    const dateFrom = dayjs(new Date());
        const dateTill = dayjs("2022-12-31 17:15:00");
        const difference = dateTill.diff(dateFrom, "day")
        const subscriptionState = dateFrom > dateTill ? "Expired" : difference + " days remaining";

        return [
            { name: "Billing", detail: "Monthly" },
            { name: "Start Date", detail: "14-Feb-2022" },
            { name: "End Date", detail: "14-Mar-2022" },
            {
                name: "Subscription",
                detail: subscriptionState,
                state: subscriptionState,
                textColor: SubscriptionColor(difference),
            },
        ];
};
