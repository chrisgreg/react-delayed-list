import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class DelayedList extends Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentWillReceiveProps(){
    this.setData();
  }

  setData() {
    let { delay, children } = this.props
    this.state.items = []

    if (!Array.isArray(children)) {
      children = new Array(1).fill(children);
    }

    children.forEach((item, i )=> {
      setTimeout(item => {
        let newData = [...this.state.items, item]
        this.setState({
          items: newData
        })
      }, delay + (i * delay), item)

    })
  }

  render() {
    const transitionClass = this.props.transitionClass || 'delayed-list-items'
    return (
        <ReactCSSTransitionGroup
          transitionName={transitionClass}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.items}
        </ReactCSSTransitionGroup>
    )
  }
}
