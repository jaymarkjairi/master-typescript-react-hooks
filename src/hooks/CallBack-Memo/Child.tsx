import React, {useEffect} from 'react';

function Child({returnComment}: any) {
  useEffect(() => {
    console.log('FUNCTION WAS CALLED');
  }, [returnComment]);

  return <div>{returnComment('jairi')}</div>;
}

export default Child;
