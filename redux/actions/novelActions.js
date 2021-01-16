export const SAVE_NOVEL_DATA = "SAVE_NOVEL_DATA";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";


//Action Creator
export function saveNovel(data) {
    return {
        type: 'SAVE_NOVEL_DATA',
        novelname: data.novelsname,
        author: data.author,
        cover: data.cover
    }
};
export function settingNovel(data) {
    return {
        type: 'SETTING_NOVEL_DATA',
        nightmode: data.nightmode,
        font: data.font,
        fontsize: data.fontsize,
        lineheight: data.lineheight,
        background: data.background,
        backgroundbig: data.backgroundbig
    }
};
export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});