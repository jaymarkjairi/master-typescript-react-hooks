import React, {useState, useCallback} from 'react';
import Child from './Child';

function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('YOWW!');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  // const getReturnComment = useMemo(() => returnComment(data), [data]);

  return (
    <div>
      <Child returnComment={returnComment} />
      <button onClick={handleToggle}>Toggle</button>
      {toggle && <h3>Toggle</h3>}
    </div>
  );
}

export default CallBackTutorial;
