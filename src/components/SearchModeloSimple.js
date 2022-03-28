import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const SearchModeloSimple = () => {
    const [valorInput, setValorInput] = useState("")
    const [personajes, setPersonajes] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({
        query: ""
    })
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?name=${searchParams.get("query")}`)
            .then(res => res.json())
            .then(data => {
                if (data.results){
                setPersonajes(data.results)
                }
            })
    }, [searchParams])

    const handleChange = (e) => {
        setValorInput(e.target.value)
    }

    const handleClick = () => {
        setSearchParams({
            query: valorInput
        })
    }

    return (
        <div>
            <h1>Search</h1>
            <p>Nombre del personaje</p>
            <input
                type="text"
                onChange={handleChange}
                value={valorInput}
            ></input>
            <button onClick={handleClick}>Enviar</button>
            {personajes.map(personaje => <h1>{personaje.name}</h1>)}
        </div>
    )
}


export default SearchModeloSimple;