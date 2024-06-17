import React from "react";

function SelectDate({ label, setState }) {
  // handleDateChange
  function handleDateChange(e) {
    setState(e.target.value);
  }

  return (
    <div>
      <label className="capitalize">{label}</label>
      <input
        type="date"
        onChange={handleDateChange}
        className="block border rounded p-1"
      />
    </div>
  );
}

export default SelectDate;
