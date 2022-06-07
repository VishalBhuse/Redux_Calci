
export const reducer = (state,{type, payload}) => {
  console.log(state,type)

    switch (type) {
        case "add":{
            state.count++;
            return {...state}
        }
        case "sub":{
            state.count--;
            return {...state}
        }
        
        case 'add2' : {
            state.count =state.count + payload;
            return{...state};
        } 
        case 'sub2' : {
            state.count =state.count - payload;
            return{...state};
        }
        case 'mult' : {
            state.count =state.count * payload;     
            return{...state};
        }
        case 'div' : {
            state.count =state.count / payload;
            return{...state};
        }  
        default:{
            return state
        }
    }

}
