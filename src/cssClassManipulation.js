function addClass(element, className) {
    if (element.classList) {
      element.classList.add(className);
    } else {
      element.className += ' ' + className;
    }
  }
  
  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
  
  function hasClass(element, className) {
    if (element.classList) {
      return element.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
  }
  
  module.exports = { addClass, removeClass, hasClass };
  