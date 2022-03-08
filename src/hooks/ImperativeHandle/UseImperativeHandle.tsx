import React, {useRef} from 'react';
import Button from './Button';

function ImperativeHandleTutorial() {
  const buttonRef = useRef<any>(null);

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <button
        onClick={() => {
          buttonRef.current?.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandleTutorial;
