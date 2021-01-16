const initialState = {
    isLoading: false,
    error: false,
    data: [],
    novelname: '',
    author: '',
    nightmode: false,
    fontsize: 18,
    font: 'Nunito',
    lineheight: 1.5,
    background: '#fff',
    backgroundbig: '#f5f7fa'
};
const novelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_NOVEL_DATA':
            return {
                ...state,
                isLoading: false,
                error: false,
                novelname: action.novelname,
                author: action.author,
                cover: action.cover
            };
        case 'SETTING_NOVEL_DATA':
            return {
                ...state,
                isLoading: false,
                error: false,
                nightmode: action.nightmode,
                fontsize: action.fontsize,
                font: action.font,
                lineheight: action.lineheight,
                background: action.background,
                backgroundbig: action.backgroundbig
            };
        case 'FETCH_ERROR':
            return { ...state, isLoading: false, error: true, data: [] };
        default:
            return { ...state };
    }
};

export default novelReducer;
