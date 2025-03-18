import { domHelp } from "./domHelp";
import foodItem from '../asset/food-item.jpg';
export { renderHome, renderMenu, renderAbout };

let section = document.getElementById('content');

let renderHome = (header, paragraph, image) => {

    domHelp.clearInnerHTML(section);

    let elHeader = domHelp.createElement({
        el: 'h1',
        innerHTML: header,
    });

    let elImg = domHelp.createElement({
        el: 'img',
        src: image,
        height: '200',
    });

    let elParagraph = domHelp.createElement({
        el: 'p',
        innerHTML: paragraph,
    });

    domHelp.renderElement({
        child: [elHeader, elImg, elParagraph],
        parent: section,
        isAdj: false,
    });

}

let renderMenu = () => {
    domHelp.clearInnerHTML(section);
    let menu = [
        {
            src: foodItem,
            item: 'Pizza'
        },
        {
            src: foodItem,
            item: 'Pasta'
        },
        {
            src: foodItem,
            item: 'Ciorbă'
        },
        {
            src: foodItem,
            item: 'Rice'
        },
        {
            src: foodItem,
            item: 'Tiramisu'
        },
    ];

    menu.forEach((item, index) => {
        let image = domHelp.createElement({
            el: 'img',
            src: item.src,
        });

        let title = domHelp.createElement({
            el: 'h3',
            innerHTML: item.item,
        });

        let container = domHelp.createElement({
            customProp: {tabIndex: 0},
            el: 'div',
            cls: 'menu-item',

        });

        domHelp.renderElement({
            child: [image, title],
            parent: container,
            isAdj: false,
        })

        domHelp.renderElement({
            child: container,
            parent: section,
            isAdj: false,
        });
    })
}

let renderAbout = () => {
    domHelp.clearInnerHTML(section);
}