import React from "react";

class SearchBar extends React.Component {
  state = {
    msg: "",
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.msg);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label className="ui label massive">Search Images </label>
          <input
            className="ui input "
            type="text"
            placeholder="Search For Images"
            value={this.state.msg}
            onChange={(e) => this.setState({ msg: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
