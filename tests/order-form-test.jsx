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

    it('follows the order prop for values', function() {
        var orderForm = TestUtils.renderIntoDocument(
            <App><OrderForm order={testOrder} /></App>
        );

        var inputs = getInputNodes(orderForm);
        expect(inputs.bacon.bacon.checked).toBeTruthy();
        expect(inputs.bacon.veganBacon.checked).toBeFalsy();
        expect(inputs.salad.lettuce.checked).toBeTruthy();
        expect(inputs.salad.tomato.checked).toBeTruthy();
        expect(inputs.condiments.mayo.checked).toBeTruthy();
        expect(inputs.condiments.mustard.checked).toBeTruthy();
    });

    it('calls onBaconChange when bacon is selected', function() {
        var spy = jasmine.createSpy('spy');
        var orderForm = TestUtils.renderIntoDocument(
            <App><OrderForm order={testOrder} onBaconChange={spy} /></App>
        );

        var inputs = getInputNodes(orderForm);
        TestUtils.Simulate.change(inputs.bacon.bacon, {
            target: {
                value: "0"
            }
        });

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(0);
    });

    it('calls onBaconChange when vegan bacon is selected', function() {
        var spy = jasmine.createSpy('spy');
        var orderForm = TestUtils.renderIntoDocument(
            <App><OrderForm order={testOrder} onBaconChange={spy} /></App>
        );

        var inputs = getInputNodes(orderForm);
        TestUtils.Simulate.change(inputs.bacon.veganBacon, {
            target: {
                value: "1"
            }
        });

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(1);
    });

    it('calls onSaladChange when lettuce is selected', function() {
        var spy = jasmine.createSpy('spy');
        var orderForm = TestUtils.renderIntoDocument(
            <App><OrderForm order={testOrder} onSaladChange={spy} /></App>
        );

        var inputs = getInputNodes(orderForm);
        inputs.salad.lettuce.checked = false;
        TestUtils.Simulate.change(inputs.salad.lettuce, {
            target: {
                id: "0"
            }
        });

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(0, false);
    });

    it('calls onSaladChange when tomato is selected', function() {
        var spy = jasmine.createSpy('spy');
        var orderForm = TestUtils.renderIntoDocument(
            <App><OrderForm order={testOrder} onSaladChange={spy} /></App>
        );

        var inputs = getInputNodes(orderForm);
        inputs.salad.tomato.checked = false;
        TestUtils.Simulate.change(inputs.salad.tomato, {
            target: {
                id: "1"
            }
        });

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(1, false);
    });

    it('calls onCondimentChange when mayo is selected', function() {
        var spy = jasmine.createSpy('spy');
        var orderForm = TestUtils.renderIntoDocument(
            <App><OrderForm order={testOrder} onCondimentChange={spy} /></App>
        );

        var inputs = getInputNodes(orderForm);
        inputs.condiments.mayo.checked = false;
        TestUtils.Simulate.change(inputs.condiments.mayo, {
            target: {
                id: "0"
            }
        });

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(0, false);
    });

    it('calls onCondimentChange when mustard is selected', function() {
        var spy = jasmine.createSpy('spy');
        var orderForm = TestUtils.renderIntoDocument(
            <App><OrderForm order={testOrder} onCondimentChange={spy} /></App>
        );

        var inputs = getInputNodes(orderForm);
        inputs.condiments.mustard.checked = false;
        TestUtils.Simulate.change(inputs.condiments.mustard, {
            target: {
                id: "1"
            }
        });

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(1, false);
    });
});
