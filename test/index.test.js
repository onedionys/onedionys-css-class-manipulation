const assert = require('assert');
const { addClass, removeClass, hasClass } = require('../src/cssClassManipulation');

describe('CSS Class Manipulation', function () {
  let element;

  beforeEach(function () {
    // Membuat elemen HTML baru untuk diuji
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(function () {
    // Menghapus elemen setelah setiap tes
    document.body.removeChild(element);
  });

  it('should add class to element', function () {
    addClass(element, 'test-class');
    assert.strictEqual(element.classList.contains('test-class'), true);
  });

  it('should remove class from element', function () {
    element.classList.add('test-class');
    removeClass(element, 'test-class');
    assert.strictEqual(element.classList.contains('test-class'), false);
  });

  it('should check if element has class', function () {
    element.classList.add('test-class');
    assert.strictEqual(hasClass(element, 'test-class'), true);
  });
});
