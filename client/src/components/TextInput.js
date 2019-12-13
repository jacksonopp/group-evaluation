import React from 'react';

const TextInput = ({ addText, textState }) => {
  return (
    <>
      <input
        type="text"
        value={textState}
        onChange={e => {
          addText({ type: 'set_user_name', payload: e.target.value })
        }}
      />
      <p>input {textState}</p>
    </>
  )
}

export default TextInput