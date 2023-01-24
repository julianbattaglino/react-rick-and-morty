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
                        <p className="status">Status: {item.status} - {item.species}</p>
                    </div>
                </article>
            </Link>

        </>
    )
}

export default CharacterItem;