import React from 'react';
import { Link } from 'react-router-dom';

const League = ({ data }) => {
  return (
    <div>
      <h4>{data.name}</h4>
      <Link to={`/leagues/${data.id}`}>
        <button type="submit">Voir détail</button>
      </Link>
    </div>
  );
};

export default League;
