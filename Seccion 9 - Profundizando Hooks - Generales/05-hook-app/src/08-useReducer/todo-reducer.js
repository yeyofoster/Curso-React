export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('Action.type = ABC no esta implementada');
            break;

        default:
            return initialState;
    }
};