
import { Captain2023 } from "@/components/roadmap/captain-and-company/2023";
import { captainFuture } from "@/components/roadmap/captain-and-company/future";

export const captainAndCompany = {
    id: 'captain',
    title: 'Captain and Company',
    items: [
        { id: '2023', year: '2023', items: Captain2023 },
        { id: 'in-the-future', year: 'In the future', items: captainFuture }
    ]
};
