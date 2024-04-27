export const throttleWithRaf = (callback) => {
    let rafToken = null;

    let result = (...args) => {
        if (!rafToken) {
            rafToken = requestAnimationFrame(() => {
                callback(...args);
                rafToken = null;
            });
        }
    };
    result.cancel = () => rafToken && cancelAnimationFrame(rafToken);
    return result;
};
