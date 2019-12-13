import React from 'react';
import axios from 'axios';

const SubmitButton = ({ statePassthrough }) => {
  const submit = () => {
    console.log(statePassthrough)
    axios.get("/api/test")
      .then(res => console.log(res.data))
  }

  return (
    <>
      <button
        onClick={() => submit()}
      >submit</button>
    </>
  )
}

export default SubmitButton