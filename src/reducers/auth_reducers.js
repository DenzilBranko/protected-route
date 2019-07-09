
export default function(state={details: 'dummy data'},action) {
    switch (action.type)  {
        case 'AUTH_DATA':
           return {...state,details: action.payload}
                       
        default:
            return state
    }
}