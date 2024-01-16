import { nineVerse2022 } from "@/components/roadmap/9vrse/2022";
import { nineVerse2023 } from "@/components/roadmap/9vrse/2023";
import { nineVerseFuture } from "@/components/roadmap/9vrse/future";

export const nineVrse = {
    id: 'ninevrse',
    title: '9VRSE & KittyKart',
    items: [
        { id: '2022', year: '2022', items: nineVerse2022 },
        { id: '2023', year: '2023', items: nineVerse2023 },
        { id: 'in-the-future', year: 'In the future', items: nineVerseFuture }
    ]
};
