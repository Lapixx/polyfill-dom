const noop = () => {};
const always = x => () => x;

const element = {
    getContext: () => ({
        globalCompositeOperation: null,
        drawImage: noop,
        fillRect: noop,
        getImageData: always({ data: [0, 0, 0] })
    })
};

module.exports = {
    createElement: () => element
};
