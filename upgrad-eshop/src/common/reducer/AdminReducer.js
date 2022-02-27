
// This helps in managing the state of the admin user Log IN /LOGOUT


export const adminState=null;

export const reducer2=(state2,action2)=>{
    if(action2.type==="ISADMINLOGGEDIN"){
        return action2.payload;
    }
    return state2;
    }
