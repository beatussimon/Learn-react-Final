import { useReducer } from "react"

export default function SimpleBank() {
    const[state, dispatch] =useReducer(reducer,{amount:0, widthrawOrDeposit:1})

    function reducer(state, action){
        if (action.type == 'putAmount'){
            return {...state, widthrawOrDeposit: action.payload}
        }
        else if(action.type == 'widthraw'){
            return {...state, amount:state.amount - state.widthrawOrDeposit}
        }
        else if(action.type == 'deposit'){
            return {...state, amount:state.amount + state.widthrawOrDeposit}
        }
    }
  return (
    <div>
        <h1>Balance: ${state.amount}</h1>
        <p>        <input onChange={(e)=>dispatch({type: 'putAmount', payload: Number(e.target.value)})} value={state.widthrawOrDeposit} type="text" placeholder="Enter Amount" /></p>

        <button onClick={()=>dispatch({type:'widthraw', payload:state.widthrawOrDeposit})}>Widthraw</button>
        <button onClick={()=>dispatch({type:'deposit', payload:state.widthrawOrDeposit})}>Deposit</button>
    </div>
  )
}
