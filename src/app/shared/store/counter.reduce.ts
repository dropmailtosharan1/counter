import { createReducer, on } from "@ngrx/store"
import { intialstate } from "./counter.state"
import { customincrement, decrement, increment,reset } from "./counter.actions"

const _counterReducer=createReducer(intialstate,
    on(increment,(state)=>{
        return{
            ...state,
            counter:state.counter+1
        };
    }),
    on(decrement,(state)=>{
        return{
            ...state,
            counter:state.counter-1
        };
    }),
    
    on(reset,(state)=>{
        return{
            ...state,
            counter:0
        };
    }),
    on(customincrement,(state,action)=>{
        return{
            ...state,
            counter:state.counter+action.value
        };
    })
    )
    


export function counterReducer(state:any,action:any){
    return _counterReducer(state,action)
}