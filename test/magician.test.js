import Magician from '../src/magician';

test('attack with distance 2', () => {
  const strange = new Magician();
  strange.attack = 100;
  strange.distance = 2;
  expect(strange.attack).toBe(90);
});

test('attack with distance 2 and debuff', () => {
  const strange = new Magician();
  strange.distance = 2;
  strange.stoned = true;
  expect(strange.attack).toBe(85);
});

test('error in stoned parameter', () => {
  expect(() => {
    const strange = new Magician();
    strange.stoned = 'foo';
  }).toThrow('Stoned value is string instead of boolean');
});

test('error in distance parameter', () => {
  expect(() => {
    const strange = new Magician();
    strange.distance = 20;
  }).toThrow('Distance should be an integer between 1 and 9');
});
