function cElem(options = {}) {
    if (!options.tag) return;

    const tag = document.createElement(options.tag);

    if (options.class) addClass(tag, options.class);

    if (options.attr) addAttr(tag, options.attr);

    if (options.content) addContent(tag, options.content);

    return tag;
}
function addContent(node, content) {
    if (!node || !content) return;

    if (typeof content === 'string') {
        node.textContent = content;
    } else if (Array.isArray(content)) {
        content.forEach(elem => {
            node.append(elem, ' ');
        })
    } else if (content.nodeType === 1) {
        node.append(content);
    }
}
function addClass(node, nameClass) {
    if (!node || !nameClass) return;

    const classNameList = nameClass.split(' ');
    node.classList.add(...classNameList);

}
function addAttr(node, attr) {
    if (!node || !attr) return;

    for (const key in attr) {
        node.setAttribute(key, attr[key]);
    }
}

export { cElem, addContent, addClass, addAttr };
