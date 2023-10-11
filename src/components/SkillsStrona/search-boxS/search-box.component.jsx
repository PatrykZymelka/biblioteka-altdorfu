import { Component } from "react";
import './search-boxS.styles.css'
class SearchBox extends Component {

    render() {
        return (
            <input
                className={`search-boxS`}
                type='searchS'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        )
    }
}
export default SearchBox;