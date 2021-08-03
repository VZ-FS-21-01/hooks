import {
    Link
} from "react-router-dom";

import { useContext } from 'react'
import { UserContext } from "../context/UserContext";

const Nav = () => {
    const data = useContext(UserContext)
    return (
        <>
            <h1>
                {JSON.stringify(data)}
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/hooks">Hooks</Link>
                    </li>
                    <li>
                        <Link to="/lifecycle">Lifecycle</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;