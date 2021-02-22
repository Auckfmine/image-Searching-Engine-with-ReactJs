import React from "react";
import SearchLabel from "./SearchLabel";
import callApi from "../api/api";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };
  onFormSubmit = async (msg) => {
    const response = await callApi.get("/search/photos", {
      params: { query: msg },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchLabel onSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
