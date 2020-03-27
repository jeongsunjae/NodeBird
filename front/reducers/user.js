
// 초기값
export const intialState = {
    isLoggedIn: false,
    user:{},
};

const LOG_IN = 'LOG_IN'; // 액션 이름
const LOG_OUT = 'LOG_OUT'; // 액션 이름

// 액션의 값
const loginAction = {
    type: LOG_IN,
    data : {
        nickname: '정선재',
    },
};

const logoutAction = {
    type: LOG_OUT,
}


const reducer = (state = intialState, action) => {

     switch(action.type)
     {
         case LOG_IN: {
             return {
                 ...satae,
                 isLoggedIn: true,
                 user: action.data,
             }
         }
         case LOG_OUT : {
             return {
                 ...state,
                 isLoggedIn: false,
                 user: null,
             }
         }
         default :{
            return {
                ...state,
            }
        }
     }

}

export default reducer;