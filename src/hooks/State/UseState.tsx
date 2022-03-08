import {userInfo} from 'os';
import React, {useState} from 'react';

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('pedro');

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>useState</h2>
      <div>
        {counter}
        <div>
          <button onClick={handleIncrement}>Increment</button>
        </div>
      </div>
      <div>
        {name}
        <div>
          <input type="text" placeholder="name" onChange={handleName} />
        </div>
      </div>
    </div>
  );
};

export default StateTutorial;
