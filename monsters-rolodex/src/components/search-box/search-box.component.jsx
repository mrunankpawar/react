import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    const { placeholder } = this.props;
    const { className } = this.props;

    return (
      <input
        // className="search-box"
        className={className}
        type="search"
        // placeholder="Search Monsters"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
