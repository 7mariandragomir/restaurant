export { domHelp };

class domHelp {
    static createElement({el = 'div', cls, id, innerHTML, src, width, height, customProp} = {}) {
        let newEl = document.createElement(el);
        // general
        if (cls) newEl.classList.add(cls);
        if (id) newEl.id = id;
        if (innerHTML) newEl.innerHTML = innerHTML;
        // images
        if (src) newEl.src = src;
        if (width) newEl.width = width;
        if (height) newEl.height = height;

        if (customProp && typeof customProp === 'object') {
            Object.entries(customProp).forEach(([key, value]) => {
                newEl.setAttribute(key, value);
            });
        };

        return newEl;
    }

    static renderElement({child, parent, isAdj, adjLocation}) {
        if(Array.isArray(child)) {
            child.forEach(el => {
                if(isAdj === true) parent.insertAdjacentElement(adjLocation, el);
                if(isAdj === false) parent.appendChild(el);
                console.log(el);
            })
        } else {
            if(isAdj === true) parent.insertAdjacentElement(adjLocation, child);
            if(isAdj === false) parent.appendChild(child);
            console.log(child);
        };
    }

    static clearInnerHTML(el) {
        el.innerHTML = '';
    }
}