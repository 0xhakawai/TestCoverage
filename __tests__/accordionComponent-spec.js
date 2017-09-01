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

  it('should build the layout from an array of objects passed as prop', function() {

    var input = [{
      name: 'Title 1',
      content: 'Content belongs to title 1'
    },{
      name: 'Title 2',
      content: 'Content belongs to title 2'
    }];

    var accordion = TestUtils.renderIntoDocument( <Accordion data={input}/> );
    var headers = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-header');
    var contents = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');

    expect(headers.length).toEqual(2);
    expect(contents.length).toEqual(2);

    expect(headers[0].textContent).toEqual('Title 1');
    expect(headers[1].textContent).toEqual('Title 2');

    expect(contents[0].textContent).toEqual('Content belongs to title 1');
    expect(contents[1].textContent).toEqual('Content belongs to title 2');
  });
});
