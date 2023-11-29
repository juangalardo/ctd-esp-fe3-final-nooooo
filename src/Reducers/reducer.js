export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_CHARACTERS':
            return {...state, list: action.payload}
        case 'ADD_FAVS':
            return {...state, favs: action.payload}
        case 'REMOVE_FAVS':
            return {...state, favs: action.payload}
        case 'TOGGLE_THEME':
            return {...state.theme === "light" ? "dark" : "light"}
        case 'GET_CHARACTER':
            return {...state, character: action.payload}
    }
}