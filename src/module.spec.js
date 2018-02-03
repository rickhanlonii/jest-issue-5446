import { willError } from './module'

test('create and handle requests', () => {
  const result = willError(null);
  expect(result).toBe(false)
});
