import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Actions";

export function CounterRedux(){
    const count=useSelector((state)=>state.count)
    const dispach = useDispatch();
    return(
        <>
        <h1> {count}</h1>
        <button onClick={()=>dispach(increment(2))}>increment</button>
        <button onClick={()=>dispach(decrement(1))}>decrement</button>

            
            
            </>
    )
}