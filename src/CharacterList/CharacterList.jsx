import './CharacterList.css';
import React from 'react'
import CharacterItem from "../CharacterItem/CharacterItem";

const CharacterList = ({ items }) => {

    console.log(items);

    return (
        <div className="itemsGrid">
        {items.map((item, index) => {
          return <CharacterItem key={index} item={item} />;
        })}
    </div>      )
}

export default CharacterList;