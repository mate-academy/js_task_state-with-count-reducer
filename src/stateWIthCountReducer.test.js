'use strict';

const countReducer = require('./stateWIthCountReducer');

{
  const initialState = { count: 0, x: 5 };
  const state = countReducer(initialState, { type: 'increase' });

  test('Count should be increased (0 => 1)', () => {
    expect(initialState).toMatchObject({ count: 0, x: 5 });
    expect(state).toMatchObject({ count: 1, x: 5 });
  });
}

{
  const initialState = { count: -1, x: 4 };
  const state = countReducer(initialState, { type: 'decrease' });

  test('Count should be decreased (-1 => -2)', () => {
    expect(initialState).toMatchObject({ count: -1, x: 4 });
    expect(state).toMatchObject({ count: -2, x: 4 });
  });
}

{
  const initialState = { count: -5, user: 'John' };
  const state = countReducer(initialState, { type: 'clear' });
  test('Reducer should set count to 0 for `clear` type (-5 => 0)', () => {
    expect(initialState).toMatchObject({ count: -5, user: 'John' });
    expect(state).toMatchObject({ count: 0, user: 'John' });
  });
}

{
  const initialState = { count: 0, country: 'Ukraine' };
  const state = countReducer(initialState, { type: 'clear' });
  test('Reducer should clear count (0 => 0)', () => {
    expect(initialState).toMatchObject({ count: 0, country: 'Ukraine' });
    expect(state).toMatchObject({ count: 0, country: 'Ukraine' });
  });
}

{
  const initialState = { count: 4, city: 'Kyiv' };
  const state = countReducer(initialState, { type: 'unknown' });
  test('Reducer should return actual state for unknown type', () => {
    expect(initialState).toMatchObject({ count: 4, city: 'Kyiv' });
    expect(state).toMatchObject({ count: 4, city: 'Kyiv' });
  });
}
