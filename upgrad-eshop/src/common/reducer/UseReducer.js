
// This helps in managing the state of the user LOG IN ?LOGOUT

export const initialState=null

export const reducer=(state,action)=>{
if(action.type==="ISLOGGEDIN"){
    return action.payload;
}

return state;
}