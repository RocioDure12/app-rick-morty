import { useNavigate } from "react-router-dom"
import { useState } from "react"
const Main = () => {
    const navigate = useNavigate();
    const [valorDelInput, setValorDelInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(valorDelInput)
        navigate(`/redireccionado/${valorDelInput}`)
    }

    const handleChange = (e) => {
        setValorDelInput(e.target.value)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}></input>
                <input type="submit" value="Buscar"></input>
            </form>


            <h1>Principal</h1>
        </div>
    )
}

export default Main