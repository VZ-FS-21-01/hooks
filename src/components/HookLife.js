// wenn wir etwas mit den Lifecycles machen wollen: useEffect Hook

import { useEffect, useState } from "react";
const HookLife = () => {
    const [counter, setCounter] = useState(1)
    const [data, setData] = useState(null)
    useEffect(() => {
        // das was ausgeführt wird
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json => setData(json))
        // in dem Array die Bedinung wann es ausgeführt wird
        // leeres Array = beim laden der Componente = componentDidMount
        // wenn wir kein Array übergeben würde es IMMER ausgeführt werden, sobald sich irgendetwas in der Componente ändert
    }, [counter])

    return (
        <div className="">
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {data && (<div>
                <h2>{data.userId}</h2>
                <p>{data.title}</p>
            </div>)}
        </div>
    );
}

export default HookLife;

// class extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     componentDidMount(prevProps) {
//         // Typical usage (don't forget to compare props):
//         fetch('.....')
//             .then(
//                 this.setState({ : });
//         )
//     }
//     render() {
//         return (  );
//     }
// }

// export default ;