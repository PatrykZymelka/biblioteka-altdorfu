import { Component } from "react";
import "./search-box.styles.css";
class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-boxPR`}
        type="search"
        placeholder="Nazwa"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
