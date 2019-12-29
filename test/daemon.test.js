import Daemon from '../src/daemon';

test('attack with distance 2', () => {
  const dormammu = new Daemon();
  dormammu.distance = 2;
  expect(dormammu.attack).toBe(90);
});

test('attack with distance 2 and debuff', () => {
  const dormammu = new Daemon();
  dormammu.distance = 2;
  dormammu.stoned = true;
  expect(dormammu.attack).toBe(85);
});

test('error in stoned parameter', () => {
  expect(() => {
    const dormammu = new Daemon();
    dormammu.stoned = 'foo';
  }).toThrow('Stoned value is string instead of boolean');
});

test('error in distance parameter', () => {
  expect(() => {
    const dormammu = new Daemon();
    dormammu.distance = 20;
  }).toThrow('Distance should be an integer between 1 and 9');
});
