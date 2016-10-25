if (typeof window === "undefined") {
    const window = require("./window");

    global.window = window;
    Object.keys(window).forEach(key => {
        global[key] = window[key];
    });
}
