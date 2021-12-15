import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [league, setLeague] = useState({});

  useEffect(() => {
    fetch(`https://api-football-standings.azharimm.site/leagues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLeague(data.data);
      });
  }, []);
  return (
    <div>
      <h3>Ceci est ma page détail</h3>
      <p>{league.name}</p>
      <img src={league.logos?.light} alt="" />
      <Link to="/">
        <button type="submit">Home</button>
      </Link>
      <a href="/">Clic here</a>
    </div>
  );
};

export default Details;
