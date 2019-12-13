import React, { useReducer } from 'react';
import './App.css';

import { ThemeProvider } from 'emotion-theming'

import GroupSelect from './components/GroupSelect';
import TextInput from './components/TextInput';
import SubmitButton from './components/SubmitButton';

const theme = {
  backgroundColor: 'green',
  color: 'red'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_group':
      return { ...state, group: action.payload };
    case 'set_user_name':
      return { ...state, user: action.payload }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { group: "", user: "", teamMates: [] })
  const { group, user, teamMates } = state

  function addFeedbackItem(input) {
    console.log(input)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <p>hello</p>
        <GroupSelect addGroup={dispatch} groupState={state.group} />
        <TextInput addText={dispatch} textState={state.user} />
        <SubmitButton statePassthrough={state} />
        <p>feedback:</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
