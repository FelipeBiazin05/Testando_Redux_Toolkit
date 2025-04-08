import CorpoCounter from "./styles";

import { useDispatch, useSelector } from "react-redux";

import { incrementar, decrementar } from "../../store/reducers/counterSlice";


const Corpo = () => {
    const CounterInitial = useSelector((state) => state.Counter.valor);
    const dispatch = useDispatch();

    return(
    <CorpoCounter>
        <button onClick={() => dispatch(decrementar())}>-</button>
        <h2>{ CounterInitial }</h2>
        <button onClick={() => dispatch(incrementar())} >+</button>
    </CorpoCounter>
    )
}

export default Corpo;