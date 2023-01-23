import './CharacterItem.css';
import { Link } from 'react-router-dom'

const CharacterItem = ({ item }) => {
    return (
        <>
            <Link to={`/item/${item.id}`} key={item.id}>
                <article>
                    <img className="detailImg" src={item.image} alt={item.name} />
                    <div className="cardContent">
                        <p>Name: {item.name}</p>
                        <span className="status">Status: {item.status} - {item.species}</span>
                        <p>Gender: {item.gender}</p>
                        <p>Last known location:: {item.location.name}</p>
                        <p>Origin: {item.origin.name}</p>
                        <p>First seen in: {item.episode[0]}</p>
                    </div>
                </article>
            </Link>

        </>
    )
}

export default CharacterItem;