export default function eventosReducer (state = [], action){
    switch (action.type){

        case "LOAD_EVENTOS_SUCCESS":
            return [action.eventos, ...state];

        case "SAVE_NEW_EVENTO_SUCCESS":
            return [...state,action.eventos];

        case "CREATE_EVENTO":
            return [...state,action.eventos];

        case "TOOGLE_LOCK":
            const item = {...action.eventos, lock:!action.eventos.lock};
            return state.map(c=>{
                if(c.key === action.eventos.key){
                    return item;
                }
                return c;
            });

        case "UPDATE_EVENTO_SUCCESS":
            return [...state.map( i => {
                if(i.key === action.eventos.key){
                    return action.eventos;
                }
                return i;
            } )];
        case 'RESET_EVENTOS':
            let newState = state.slice(0);
            for( let eventos of newState){
               eventos.lock = false;
            }
            return newState;
        default:
            return state;
    }
}