import { playList } from "./songs-list";

function createOlLi() {
    const arr = Array.from(playList, x => x.song + ' ' + x.author);
    let temp = '<ol>';
    for (let i = 0; i < arr.length; i++) {
        temp = temp + '<li>' + arr[i] + '</li>';
    }
    temp = temp + '</ol>;'
    document.body.append(stringToHtml(temp));
}
function stringToHtml(stringHtml) {

    const tag = document.createElement('div');
    tag.innerHTML = stringHtml;

    return tag.firstChild;
}

function addSong(pl, author, song) {
    pl.push({
        author: author.toUpperCase(),
        song: song.toUpperCase()
    });
}
export { createOlLi, addSong };
