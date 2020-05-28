'use strict';

const countReducer = require('./stateWIthCountReducer');

describe('Increase action', () => {
  const initialState = {
    count: 0, x: 5,
  };
  const state = countReducer(initialState, { type: 'increase' });

  test('Count should be increased (0 => 1)', () => {
    expect(state)
      .toEqual({
        count: 1, x: 5,
      });
  });

  test('Initial state should not be changed', () => {
    expect(initialState)
      .toEqual({
        count: 0, x: 5,
      });
  });
});

describe('Decrease action', () => {
  const initialState = {
    count: -1, x: 4,
  };
  const state = countReducer(initialState, { type: 'decrease' });

  test('Count should be decrease (-1 => -2)', () => {
    expect(state)
      .toEqual({
        count: -2, x: 4,
      });
  });

  test('Initial state should not be changed', () => {
    expect(initialState)
      .toEqual({
        count: -1, x: 4,
      });
  });
});

describe('Clear action #1', () => {
  const initialState = {
    count: -5, user: 'John',
  };
  const state = countReducer(initialState, { type: 'clear' });

  test('Count should be cleared (-5 => 0)', () => {
    expect(state)
      .toEqual({
        count: 0, user: 'John',
      });
  });

  test('Initial state should not be changed', () => {
    expect(initialState)
      .toEqual({
        count: -5, user: 'John',
      });
  });
});

describe('Clear action #2', () => {
  const initialState = {
    count: 0, country: 'Ukraine',
  };
  const state = countReducer(initialState, { type: 'clear' });

  test('Count should be cleared (0 => 0)', () => {
    expect(state)
      .toEqual({
        count: 0, country: 'Ukraine',
      });
  });

  test('Initial state should not be changed', () => {
    expect(initialState)
      .toEqual({
        count: 0, country: 'Ukraine',
      });
  });
});

describe('Unknown action', () => {
  const initialState = {
    count: 4, city: 'Kyiv',
  };
  const state = countReducer(initialState, { type: 'unknown' });

  test('Reducer should return actual state for unknown type', () => {
    expect(state)
      .toBe(initialState);
  });
});
