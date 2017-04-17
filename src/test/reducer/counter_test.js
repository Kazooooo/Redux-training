import { expect } from 'chai';
import { INCREMENT, DECREMENT } from '../../js/actions/types';

import counter from '../../js/reducer/counter';

describe('Comments Reducer', () => {
  it('handles action with unknown value', () => {
    expect(counter(undefined, {})).to.eql(0);
  });
  it('handles action with unknown type', () => {
    const action = { type: undefined };
    expect(counter(0, action)).to.eql(0);
  });
  it('handles action of type INCREMENT', () => {
    const action = { type: INCREMENT };
    expect(counter(0, action)).to.eql(1);
  });
  it('handles action of type DECREMENT', () => {
    const action = { type: DECREMENT };
    expect(counter(1, action)).to.eql(0);
  });
});
