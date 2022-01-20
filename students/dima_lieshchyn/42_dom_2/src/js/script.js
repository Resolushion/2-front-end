// // console.dir(document);
// // console.log(document.documentElement); // Tag HTML
// // console.log(document.head);
// // console.log(document.body);
// // document.body.style.backgroundColor = 'red';

// const { isArray } = require("core-js/core/array");

// const { set } = require("core-js/core/dict");

// const nav = document.getElementById('menu');

// // const navByTag = document.getElementsByTagName('li');



// // console.log(nav);

// // for (let i = 0; i < navByTag.length; i++) {
// //     console.log(navByTag[i].style.color = 'red');
// // }

// const menu = nav.querySelector('.menu');
// const menuItem = menu.querySelectorAll('.menu__item');

// // console.log(menu);
// // console.log(menuItem);

// // menuItem.forEach(elem => {
// //     console.log(elem);
// // });

// // console.log(Array.prototype.slice.call(menuItem));
// // console.log([...menuItem]);

// // const span = menu.querySelectorAll('.menu__link>span>span');
// // console.log(span);

// // const oddLi = menu.querySelectorAll('.menu__item:nth-child(odd)')
// // console.log(oddLi);

// // const evenLi = menu.querySelectorAll('.menu__item:nth-child(even)')
// // console.log(evenLi);

// // const li = menu.querySelectorAll('.menu__item [href="#3"]');
// // console.log(li);

// console.log(menu.parentElement);
// console.log(menu.closest('body'));

// console.log(menu.firstChild);
// console.log(menu.firstElementChild);

// console.log(menu.lastChild);
// console.log(menu.lastElementChild);

// console.log(menu.previousElementSibling);
// console.log(menu.nextElementSibling);

// console.log(menu.tagName.toLowerCase());

// const links = menu.querySelectorAll('.menu__link');

// const link5 = menu.querySelector('[href="#5"]');


// links.forEach(elem => {
//     console.log(elem.firstElementChild);
// });

// console.log(link5);

// console.log(link5.closest('.menu').previousElementSibling);
// console.log(link5.closest('.menu').nextElementSibling);

// function showListItems(elem) {
//     console.log(elem);
//     if (!confirm('Показать следущий елемент')) return;
//     const nextElem = elem.nextElementSibling;
//     if (nextElem) showListItems(nextElem);
// }

// // showListItems(menu.firstElementChild)


// // console.log(menu.innerHTML);
// // console.log(menu.outerHTML);

// console.log(menuItem.forEach(elem => {
//     console.log(elem.innerText, elem.outerText, elem.textContent);
// }))

// const menu = document.querySelector('.menu');
// menu.setAttribute('title', 'sasdasd')
// console.log(menu.getAttribute('title'));

// console.log(menu.hasAttribute('title'));

// console.log(menu.dataset.menuCustom);
// function modifHref(cssSelector,) {
//     const temp = document.querySelectorAll(cssSelector);
//     temp.forEach(elem => {
//         const number = elem.getAttribute('href').slice(1) * 2;
//         elem.setAttribute('href', '#' + number);
//     })
// }

// modifHref('.menu__link');

// function createDataSet(cssSelector, atribut) {
//     const temp = document.querySelectorAll(cssSelector);
//     temp.forEach(elem => {
//         const atr = elem.getAttribute(atribut);
//         elem.parentElement.dataset.id = atr;
//     });
// }
// createDataSet('.menu__link', 'href');

// function createDataAtribut(cssSelector) {
//     const temp = [...document.querySelectorAll(cssSelector)];
//     let result = '';
//     temp.forEach((elem, i) => {
//         const atr = elem.getAttribute('href');
//         if (i !== temp.length - 1) {
//             result = result + atr + '-';
//         } else {
//             result = result + atr;
//             elem.closest('.menu').dataset.menuCustom = result;
//         }
//     });
// }

// createDataAtribut('.menu__link');

// console.log(menu.classList.add('qqq', 'asdasd'));

// console.log(menu.classList.remove('qqq'));

// console.log(menu.classList.toggle('qqq'));

// console.log(menu.classList.contains('asdasd'));

// menu.style.backgroundColor = 'red';

// menu.style.backgroundColor = '';

// console.log(window.getComputedStyle(menu).display);

// const link = document.createElement('a');
// link.setAttribute('href', '#22');
// link.classList.add('active');
// link.textContent = 'active';

// // document.body.append(link.cloneNode(true));
// // document.body.prepend(link);

// menu.before(link);
// menu.after(link);

// // menu.replaceWith(link);

// link.remove();

// console.log(link);

function cElem(options = {}) {
    if (!options.tag) return;

    const tag = document.createElement(options.tag);

    if (options.class) addClass(tag, options.class);

    if (options.attr) addAttr(tag, options.attr);

    if (options.content) addContent(tag, options.content);

    console.log(tag);

    return tag;
}

function addContent(node, content) {
    if (!node || !content) return;

    console.log(content[0].nodeType);

    if (typeof content === 'string') {
        node.textContent = content;
    } else if (Array.isArray(content)) {
        content.forEach(elem => {
            node.append(elem);
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

cElem({
    tag: 'a',
    class: 'link sss fff',
    attr: {
        id: 'myLink',
        href: '#',
        title: 'my first link'
    },
    content: [
        cElem({
            tag: 'span',
            content: 'text',
        }),
        cElem({
            tag: 'span',
            content: 'text',
        }),
        'asdasd'
    ],
});


function stringToHtml(stringHtml) {

    const tag = document.createElement('div');
    tag.innerHTML = stringHtml;

    return tag.firstChild;
}


document.body.append(stringToHtml('<p>text</p>'))
