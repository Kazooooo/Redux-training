import { expect } from 'chai';
import { INCREMENT, DECREMENT } from '../../../src/js/actions/types';
import { increment, decrement } from '../../../src/js/actions';

describe('actions', () => {
  describe('increment', () => {
    it('has the correct type of INCREMENT', () => {
      const action = increment();
      expect(action.type).to.equal(INCREMENT);
    });
  });

  describe('decrement', () => {
    it('has the correct type of DECREMENT', () => {
      const action = decrement();
      expect(action.type).to.equal(DECREMENT);
    });
  });
});
