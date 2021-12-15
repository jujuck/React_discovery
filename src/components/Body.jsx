import React, { useState, useEffect } from 'react';
import League from './League';

const Body = () => {
  const [clic, setClic] = useState(0);
  const [double, setDouble] = useState(0);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    fetch('https://api-football-standings.azharimm.site/leagues')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLeagues(data.data);
      });
  }, []);
  const updateClic = () => {
    const newClic = clic + 1;
    setClic(newClic);
    setDouble(newClic * 2);
  };

  return (
    <div>
      {leagues.map((league) => (
        <League data={league} />
      ))}
      <p>Mon body</p>
      <p>
        {clic} - {double}
      </p>
      <button type="submit" onClick={() => updateClic()}>
        Clic
      </button>
    </div>
  );
};

export default Body;
