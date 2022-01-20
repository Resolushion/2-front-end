function createOlLi(arr) {
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

export default createOlLi;
