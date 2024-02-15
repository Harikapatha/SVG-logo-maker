const { Circle, Square, Triangle } = require('./shapes');

describe('Shapes', () => {
  test('Triangle should render correctly', () => {
    const shape = new Triangle('text', 'red', 'blue');
    expect(shape.render()).toEqual(
      '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150 0, 300 300, 0 300" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">text</text></svg>'
    );
  });

  test('Circle should render correctly', () => {
    const shape = new Circle('text', 'red', 'blue');
    expect(shape.render()).toEqual(
      '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">text</text></svg>'
    );
  });

  test('Square should render correctly', () => {
    const shape = new Square('text', 'red', 'blue');
    expect(shape.render()).toEqual(
      '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="25" width="250" height="250" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">text</text></svg>'
    );
  });
});