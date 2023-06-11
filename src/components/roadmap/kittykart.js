import {kittyKart2022} from "@/components/roadmap/kittykart/2022";
import {kittyKart2023} from "@/components/roadmap/kittykart/2023";
import {kittyKartFuture} from "@/components/roadmap/kittykart/future";

export const kittyKart = {
    id: 'kittykart',
    title: 'KittyKart',
    items: [
        { id: '2022', year: '2022', items: kittyKart2022 },
        { id: '2023', year: '2023', items: kittyKart2023 },
        { id: 'in-the-future', year: 'In the future', items: kittyKartFuture }
    ]
};
