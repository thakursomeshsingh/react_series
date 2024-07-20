import React, { useDeferredValue, useEffect, useMemo } from 'react';

function List({ input }) {
  const deferredInput = useDeferredValue(input);
  const DataSize = 5000;
  const list = useMemo(() => {
    const a = [];
    for (let i = 0; i < DataSize; i++) {
      a.push(<div key={i}>{deferredInput}</div>);
    }
    return a;
  }, [deferredInput]);

  useEffect(()=>{
    console.log(`Input: ${input} \nDeferred: ${deferredInput}`);
  });

  return (
    <div>
      {list}
    </div>
  );
}

export default List;
