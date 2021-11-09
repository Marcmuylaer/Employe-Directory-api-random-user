import React from "react";

function Search(props) {
  return (
    <div className="searchCon">
      <div className="row">
        {" "}
        <input
          type="title"
          name="nameInput"
          value={props.nameInput}
          onChange={props.handleInputChange}
          className="inputField"
          placeholder="Search Employees"
        />
      </div>

      <div className="row">
        {" "}
        <button className="rounded btn" onClick={props.handleSort}>
          Sort By Name
        </button>
        {" "}
        <button className="rounded btn" onClick={props.unSort}>
          un-sort
        </button>
      </div>
    </div>
  );
}

export default Search;
