const toggleModalReducer = (state = [], action) => {
    switch (action.type) {
        case 'TRUE':
            console.log('isOpen is true');
            return [
                ...state,
                {
                    show: true,
                }
            ]
        case 'FALSE':
            console.log('isOpen is false');
            return [
                ...state,
                {
                    show: false,
                }
            ]
        default:
            return state;
    }
}

export default toggleModalReducer;