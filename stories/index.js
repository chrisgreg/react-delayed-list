import React from 'react';
import DelayedList from '../src/DelayedList';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import './styles.css';

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
  ));
