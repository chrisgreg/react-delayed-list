import React from 'react';
import DelayedList from '../src/DelayedList';
import Demo from './Demo'
import { storiesOf, action, linkTo } from '@kadira/storybook';
import './styles.css';

const BasicList = (props) => {
  return (
    <DelayedList delay={200} >
      this.props.children
    </DelayedList>
  )
}

storiesOf('DelayedList', module)
  .add('1 second delay', () => (
    <DelayedList delay={1000}>
      <h1>DelayedList</h1>
      <h2>Is</h2>
      <h3>Awesome</h3>
    </DelayedList>
  ))
  .add('500 millisecond delay', () => (
    <DelayedList delay={500}>
      <h1>DelayedList</h1>
      <h2>Is</h2>
      <h3>Awesome</h3>
    </DelayedList>
  ))
  .add('500 millisecond delay with animation', () => (
    <DelayedList delay={500} transitionClass='mylist'>
        <h1>DelayedList</h1>
        <h2>Is</h2>
        <h3>Awesome</h3>
    </DelayedList>
  ))
  .add('250 millisecond delay with a big list & animation', () => (
    <DelayedList delay={250} transitionClass='mylist'>
        <p>Quick little entry</p>
        <p>Quick little entry</p>
        <p>Quick little entry</p>
        <p>Quick little entry</p>
        <p>Quick little entry</p>
        <p>Quick little entry</p>
        <p>Quick little entry</p>
        <p>Quick little entry</p>
        <p>Quick little entry</p>
        <p>Quick little entry</p>
    </DelayedList>
  ))

  storiesOf('Demo', module)
    .add('Demo', () => (
      <Demo />
    ))
