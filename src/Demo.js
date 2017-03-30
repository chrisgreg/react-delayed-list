import React, { Component } from 'react';
import DelayedList from './DelayedList';

export default class Demo extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [1,2,3]
    }
  }

  render() {
    return(
      <div>
        <button onClick={() => {
          this.setState({
            items: [4,5,6]
          })
        }}>Press Me</button>

        <ListOfStuff items={this.state.items} />

      </div>
    )
  }
}

const ListOfStuff = (props) => {

  const toRender = props.items.map(i => (
    <div>{i}</div>
  ))
  return(
    <DelayedList delay={100}>
      {toRender}
    </DelayedList>
  )

}
