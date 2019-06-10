import React from 'react';

function SWCharacter(props) {
  return (
    <div className="character-card">
      <div className="character-info">
        <h3>{props.swcharacter.name}</h3>
        <p><strong>Height:</strong>  {props.swcharacter.height} Meters, <strong>Year of Birth: </strong>  
        {props.swcharacter.birth_year}, <strong> Mass: </strong>{props.swcharacter.mass}</p>
      </div>
    </div>
  );
}

export default SWCharacter;