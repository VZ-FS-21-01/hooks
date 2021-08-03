import { useContext } from 'react'
import { UserContext } from "../context/UserContext";

const Global = () => {
    const { count, setCount } = useContext(UserContext)
    return (
        <div className=""
        >
            {count}
            <button onClick={() => setCount(count + 10)}>+10</button>
        </div>);
}

export default Global;