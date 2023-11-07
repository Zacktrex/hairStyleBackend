import React, { useRef, useEffect, useState } from 'react';

function InputBox() {
  const inputRef = useRef(null);
  const [isInputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    console.log("damn")
    // Function to handle clicks outside of the input box
    function handleClickOutside(event) {
        console.log(event.target.id,event.target)
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputFocused(false);
      }
    }

    // Add the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <input
      id='test'
        ref={inputRef}
        type="text"
        onFocus={() => setInputFocused(true)}
        placeholder="Click inside or outside this input box"
      />
      {isInputFocused && (
        <p>Input is focused</p>
      )}
    </div>
  );
}

export default InputBox;