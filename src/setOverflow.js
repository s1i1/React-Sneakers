const setOverflow = (state) => {
    const body = document.body;

    if (state) {
        let div = document.createElement('div');
        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflowY = 'scroll';
        body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();
        console.log(scrollWidth);

        body.style.overflow = 'hidden';
        body.style.marginRight = scrollWidth + 'px';
    } else {
        body.style.overflow = '';
        body.style.marginRight = '';
    }
};

export default setOverflow;