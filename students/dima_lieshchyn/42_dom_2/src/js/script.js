import songsList from "./songs-list";
import { cElem } from "./create-element";
import createOlLi from "./createElement";

document.body.append(cElem({
    tag: 'ol',
    class: 'songsList',
    attr: {
        title: 'songs list'
    },
    content: [
        cElem({
            tag: 'li',
            content: songsList[0],
        }),
        cElem({
            tag: 'li',
            content: songsList[1],
        }),
        cElem({
            tag: 'li',
            content: songsList[2],
        }),
        cElem({
            tag: 'li',
            content: songsList[3],
        }),
        cElem({
            tag: 'li',
            content: songsList[4],
        }),
        cElem({
            tag: 'li',
            content: songsList[5],
        }),
        cElem({
            tag: 'li',
            content: songsList[6],
        }),
        cElem({
            tag: 'li',
            content: songsList[7],
        }),
    ],
}));

createOlLi(songsList);

