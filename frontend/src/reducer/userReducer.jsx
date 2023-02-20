const userReducer = (state , action) => {
    switch(action.type){
        case "IS_LOADING":
            return {
                ...state,
                isLoading:true,
                isError:false
            }

        case "SET_USER":
            return {
                ...state,
                isLoading:false,
                user:action.payload
            }

        case "IS_ERROR": 
            return {
                ...state,
                isError:true,
                isLoading:false
            }
        case "LOG_OUT_USER":
            localStorage.setItem("User" , "null");
            return {
                ...state,
                user:null,
            }

        case "UPDATE_PROFILE":
            let update = action.payload;
            state.user = update;
            return state;
        default:
            return state   
    }
};

export default userReducer;