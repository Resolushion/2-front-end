// ..Плейлист песен
import { playList } from "./songs-list";
// .. 1 способ создания плейлиста
import { cElem } from "./create-element";
// .. 2 способ создания плейлиста
import { createOlLi, addSong } from "./createElement";

const songs = Array.from(playList, x => x.song + ' ' + x.author);
//Создать список песен двумя способами

document.body.append(cElem({
    tag: 'ol',
    class: 'songsList',
    attr: {
        title: 'songs list'
    },
    content: [
        cElem({
            tag: 'li',
            content: songs[0],
        }),
        cElem({
            tag: 'li',
            content: songs[1],
        }),
        cElem({
            tag: 'li',
            content: songs[2],
        }),
        cElem({
            tag: 'li',
            content: songs[3],
        }),
        cElem({
            tag: 'li',
            content: songs[4],
        }),
        cElem({
            tag: 'li',
            content: songs[5],
        }),
        cElem({
            tag: 'li',
            content: songs[6],
        }),
        cElem({
            tag: 'li',
            content: songs[7],
        }),
    ],
}));

addSong(playList, 'prosto', 'pesnya')
createOlLi();

