import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const SearchMComplejo = () => {
    // me permite ver la variable de la ruta
    const params = useParams()

    const [resultado, setResultado] = useState([])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?name=${params.nombre}`)
            .then(res => res.json())
            .then(data => {
                setResultado(data.results)
            })
    }, [])

    return (
        <div>
            <h2>Search redireccionado</h2>

            {resultado.map(personaje => (
                <h3 key={personaje.id}>{personaje.name}</h3>
            ))}

        </div>
    )
}

export default SearchMComplejo