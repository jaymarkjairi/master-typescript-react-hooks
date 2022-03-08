import React, {useState, useReducer} from 'react';

//interface vs type, type is use in dealing with with object and interface is dealing with object.

interface State {
  count: number;
  textShow: boolean;
}

interface Increment {
  readonly type: 'Increment';
}

type ShowText = {
  readonly type: 'toggleTextShow';
};

type Action = Increment | ShowText;

const multipleUseState = (state: State, action: Action) => {
  switch (action.type) {
    case 'Increment':
      return {
        count: state.count + 1,
        textShow: state.textShow,
      };
    case 'toggleTextShow':
      return {count: state.count, textShow: !state.textShow};
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(false);

  const [state, dispatch] = useReducer(multipleUseState, {
    count: 0,
    textShow: true,
  });

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
    setShowText(!showText);
  };

  const handleIncrementUsingReducer = () => {
    dispatch({type: 'Increment'});
    dispatch({type: 'toggleTextShow'});
  };

  return (
    <div>
      <div>
        <h2>useReducer</h2>
        {counter}
        <div>
          <button onClick={handleIncrement}>Increment</button>
        </div>
        {showText && <p>This is text using useState.</p>}
      </div>
      <div>
        {state.count}
        <div>
          <button onClick={handleIncrementUsingReducer}>Increment</button>
        </div>

        {state.textShow && <p>This is text using useReducer.</p>}
      </div>
    </div>
  );
};

export default ReducerTutorial;
