import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDelete = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <div>
        <Container>
          <ListGroup>
            <TransitionGroup className="shopping-list">
              {items.map(({ _id, name }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      color="danger"
                      className="remove-btn mr-2"
                      size="sm"
                      onClick={this.onDelete.bind(this, _id)}
                    >
                      &times;
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
  item: state.item
});

export default connect(mapStateToProp, { getItems, deleteItem })(ShoppingList);
