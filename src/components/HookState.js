import { useState } from "react";
import Global from "./Global";


const Hooks = () => {
    // const [firstName, setFirstname] = useState("")

    // Wichtig: key in unserer Hook und name in unserem Inputfeld müssen übereinstimmen.
    const [inputs, setInputs] = useState({
        firstName: "asd",
        lastName: "",
        mail: ""
    })
    const handleInputs = (e) => {
        console.log(e)
        // console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
        setInputs(prevState => {
            return {
                // Wir verteilen den PrevState und aktualisieren nur den, der gerade das Ziel war
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <div className="hooks">
            <input type="text" name="firstName" value={inputs.firstName} onChange={handleInputs} />
            <input type="text" name="lastName" value={inputs.lastName} onChange={handleInputs} />
            <input type="text" name="mail" value={inputs.mail} onChange={handleInputs} />
            {/* {inputs["firstName"]} */}
            <Global />
        </div>
    );
}

export default Hooks;