import React from "react";
import './appStyles.css';

function SearchBar({onChange,msg,loading}){
  return (
    <div className="ui segment">
        <form className="ui form">
          <label className="ui label massive">Search Images </label>
          <input
            className="ui input "
            type="text"
            placeholder="Search For Images"
            value={msg}
            onChange={(e)=>onChange(e.target.value)}
          />
        </form>
        {loading ? <div className="loader"></div> : null}
      </div>
  )
}

export default SearchBar;
