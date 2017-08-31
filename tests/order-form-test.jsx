jest.autoMockOff()

var React = require('react/addons');
var App = require('../app');
var OrderForm = require('../order-form');
var TestUtils = React.addons.TestUtils;

var mui = require('material-ui');
var RadioButton = mui.RadioButton;
var Checkbox = mui.Checkbox;

var getInputNodes = function(component) {
    var radioButtons = TestUtils.scryRenderedComponentsWithType(component, RadioButton);
    var bacon = TestUtils.findRenderedDOMComponentWithTag(radioButtons[0], 'input');
    var veganBacon = TestUtils.findRenderedDOMComponentWithTag(radioButtons[1], 'input');

    var checkboxes = TestUtils.scryRenderedComponentsWithType(component, Checkbox);
    var lettuce = TestUtils.findRenderedDOMComponentWithTag(checkboxes[0], 'input');
    var tomato = TestUtils.findRenderedDOMComponentWithTag(checkboxes[1], 'input');
    var mayo = TestUtils.findRenderedDOMComponentWithTag(checkboxes[2], 'input');
    var mustard = TestUtils.findRenderedDOMComponentWithTag(checkboxes[3], 'input');

    return {
        bacon: {
            bacon: React.findDOMNode(bacon),
            veganBacon: React.findDOMNode(veganBacon)
        },
        salad: {
            lettuce: React.findDOMNode(lettuce),
            tomato: React.findDOMNode(tomato)
        },
        condiments: {
            mayo: React.findDOMNode(mayo),
            mustard: React.findDOMNode(mustard)
        }
    };
};

describe('OrderForm', function() {
    var testOrder;

    beforeEach(function() {
        testOrder = {
            bacon: [{
                id: 0,
                name: 'Bacon',
                selected: true
            },
            {
                id: 1,
                name: 'Vegan Bacon',
                selected: false
            }],
            salad: [{
                id: 0,
                name: 'Lettuce',
                selected: true
            },
            {
                id: 1,
                name: 'Tomato',
                selected: true
            }],
            condiments: [{
                id: 0,
                name: 'Mayonnaise',
                selected: true
            },
            {
                id: 1,
                name: 'Mustard',
                selected: true
            }]
        };
    });
});
