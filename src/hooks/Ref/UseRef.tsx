import React, {useRef} from 'react';

const RefTutorial = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // useRef will use to get the value of element. example of useRef is after load it will automatically focus on username
  const handleClick = () => {
    inputRef.current?.focus(); // focus to input
  };
  return (
    <div>
      <h2>useRef</h2>
      <div>
        <input type="text" placeholder="Ex..." ref={inputRef} />
        <button onClick={handleClick}>Change Name</button>
      </div>
    </div>
  );
};

export default RefTutorial;
