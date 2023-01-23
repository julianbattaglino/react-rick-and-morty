import './CharacterListContainer.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from '../CharacterList/CharacterList';

const CharacterListContainer = () => {

    const [items, setItems] = useState();

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((res) => {
                setItems(res.data);
                console.log(res.data);
            });

    }, []);


    return (
        <div className="item-list-container">
            <h1 className="textCenter">The Rick and Morty APP</h1>

            {items ? <CharacterList items={items.results} /> : null}
        </div>

    )
}

export default CharacterListContainer;
