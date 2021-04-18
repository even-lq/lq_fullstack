import { Component } from "react";
import PropTypes from 'prop-types'

class AppItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (<li onClick={this.handleClick}>
      {this.props.name}为你服务-{this.props.content}</li>);
  }
  handleClick() {
    this.props.deleteItem(this.props.index);
  }
}

AppItem.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
};
AppItem.defaultProps = {
  name: 'name',
};
export default AppItem;
