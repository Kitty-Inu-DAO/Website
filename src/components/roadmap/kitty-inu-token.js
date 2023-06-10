import {kittyInuToken2021} from "./kitty-inu-token/2021";
import {kittyInuToken2022} from "./kitty-inu-token/2022";
import {kittyInuToken2023} from "./kitty-inu-token/2023";
import {kittyInuTokenFuture} from "./kitty-inu-token/future";

export const kittyInuToken = {
    title: 'Kitty Inu Token',
    items: [
        { year: '2021', items: kittyInuToken2021 },
        { year: '2022', items: kittyInuToken2022 },
        { year: '2023', items: kittyInuToken2023 },
        { year: 'In the future', items: kittyInuTokenFuture }
    ]
};
