import { nifty2023 } from "@/components/roadmap/nifty-island/2023";
import { niftyFuture } from "@/components/roadmap/nifty-island/future";

export const niftyIsland = {
    id: 'nifty',
    title: 'Nifty Island',
    items: [
        { id: '2023', year: '2023', items: nifty2023 },
        { id: 'in-the-future', year: 'In the future', items: niftyFuture }
    ]
};