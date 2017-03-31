import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { isEqual } from 'lodash'

export default class DelayedList extends Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!isEqual(this.props.children, nextProps.children)) {
      this.setData(nextProps.children);
      return true;
    } else if (!isEqual(this.state.items, nextState.items)) {
      return true;
    } else {
      return false;
    }
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
    return (
      <div>
        {this.state.items}
      </div>
    )
  }
}
