import { useReducer } from "react";
import { useState } from "react";

function App(){
    const[count, setCount] = useState(0)

    const[state, dispatch] =useReducer(reducer, {countr:0, incrementBy:1});

    function reducer(state, action){
        if(action.type =='increment'){
            return {...state, countr: state.countr + state.incrementBy};
        }
        else if(action.type =='decrement'){
            return {...state, countr: state.countr - state.incrementBy};
        }
        else if(action.type=='setIncrement'){
            return {...state, incrementBy: action.payload}
        }
    }

    return <div className="App">
        <input onChange={(event)=>dispatch({type:'setIncrement', payload:Number(event.target.value)})} value={state.incrementBy} type="text" />
        useState hook: {count}
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>

        useReducer hook: {state.countr}
        <button onClick={()=>dispatch({type: 'increment', payload:1})}>Increment</button>
        <button onClick={()=>dispatch({type: 'decrement', payload:1})}>Decrement</button>
    </div>
}

export default App;
