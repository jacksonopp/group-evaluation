import React, { useEffect } from 'react';

const groups = [
  "group1",
  "group2",
  "group3",
  "group4",
  "group5",
]

const GroupSelect = ({ addGroup, groupState }) => {

  useEffect(() => {
  }, [])
  return (
    <>
      <label htmlFor="group-select" />
      <select
        id="group-select"
        name='group-select'
        defaultValue=''
        value={groupState}
        onChange={e => {
          addGroup({ type: "set_group", payload: e.target.value })
        }}
      >
        {groups.map(group => (
          <option
            key={group}
          >
            {group}
          </option>
        ))}
        >
      </select>
    </>
  )
}

export default GroupSelect;