import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class DelayedList extends Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setData(nextProps.children);
  }

  setData(nextProps) {
    let { delay } = this.props
    this.state.items = []

    if (!Array.isArray(nextProps)) {
      nextProps = new Array(1).fill(nextProps);
    }

    if (nextProps.length === 0) {
      return this.setState({
        items: []
      })
    }

    nextProps.forEach((item, index )=> {
      setTimeout(item => {
        let newData = [...this.state.items, item]
        this.setState({
          items: newData
        })
      }, delay + (index * delay), item)
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
