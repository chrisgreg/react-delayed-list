import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class DelayedList extends Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.setData();
  }

  setData() {
    const { children, delay } = this.props
    let currentIndex = 0;

    children.forEach(item => {
      setTimeout(item => {
        let newData = [...this.state.items, item]
        this.setState({
          items: newData
        })}
      , delay + (currentIndex * delay), item);
      currentIndex++;
    });
  }

  render() {
    const transitionClass = this.props.transitionClass || 'delayed-list-items';
    return (
      <ReactCSSTransitionGroup transitionName={transitionClass}>
        {this.state.items}
      </ReactCSSTransitionGroup>
    )
  }
}
