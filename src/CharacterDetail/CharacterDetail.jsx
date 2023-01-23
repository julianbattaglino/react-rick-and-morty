import './CharacterDetail.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'


const CharacterDetail = () => {

    let params = useParams();

    const [item, setItem] = useState();

    useEffect(() => {
        const fetchItem = async () => {
            const data = await fetch(
                `https://rickandmortyapi.com/api/character/${params.id}`
            )
            const item = await data.json();
            setItem(item);
        }

        fetchItem(params.id)
    }, [params.id])

    console.log(item);

    return (
        <div className="backgroundImg">
            <Link to="/">
                Volver al inicio
            </Link>
            {
                item && (
                    <div>
                        <div>
                            <img src={item.image} alt={item.name} />
                        </div>
                            <p>Name: {item.name}</p>
                            <span className="status">Status: {item.status} - {item.species}</span>
                            <p>Gender: {item.gender}</p>
                            <p>Last known location:: {item.location.name}</p>
                            <p>Origin: {item.origin.name}</p>
                            <p>First seen in: {item.episode[0]}</p>
                    </div>
                )
            }

        </div>
    )
}

export default CharacterDetail;