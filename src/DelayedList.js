import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class DelayedList extends Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.setData()
  }

  setData() {
    let { delay, children } = this.props
    let currentIndex = 0

    if (!Array.isArray(children)) {
      children = new Array(1).fill(children);
    }

    children.forEach(item => {
      setTimeout(item => {
        let newData = [...this.state.items, item]
        this.setState({
          items: newData
        })
      }, delay + (currentIndex * delay), item)

      currentIndex++
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
