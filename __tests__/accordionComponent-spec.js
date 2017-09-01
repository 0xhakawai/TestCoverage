jest.dontMock('../scripts/accordionComponent.js');

describe('Accordion', function() {
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TestUtils = require('react-addons-test-utils');

  var Accordion;

  beforeEach(function() {
    Accordion = require('../scripts/accordionComponent');
  });

  it('should exists', function() {
    // Render into document
    var accordion = TestUtils.renderIntoDocument( <Accordion /> );
    expect(TestUtils.isCompositeComponent(accordion)).toBeTruthy();
  });
});
