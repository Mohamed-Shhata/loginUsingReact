import React, { useEffect, useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  const handleAddClick = (e) => {
    setCounter(counter + 1);
  };
  const { onCounterChange } = props;

  useEffect(() => {
    onCounterChange(counter);
  }, [counter, onCounterChange]);

  const handleRemoveClick = (e) => {
    if (counter !== 0) setCounter(counter - 1);
  };

  return (
    <>
      <div className="col-10  mx-auto my-4 bg-info p-4">
        <div className="mb-4">Your Counter is: {counter}</div>
        <div className="d-flex justify-content-around">
          <button
            type="button"
            class="btn btn-primary "
            onClick={handleAddClick}
          >
            Add
          </button>
          <button
            type="button"
            class="btn btn-primary "
            onClick={handleRemoveClick}
          >
            Remove
          </button>
        </div>
        {counter === 0 && <p>You can't go below 0, huh.</p>}
      </div>
    </>
  );
}

export default Counter;
