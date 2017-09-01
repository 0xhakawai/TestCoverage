'use strict';

var React = require('react');

var Accordion = React.createClass({
  render: function(){
    var panes = [];
    var data = this.props.data || [];

    data.forEach(function(item, index){
      panes.push(
        <div key={index}>
          <div className="accordion-header">
            {item.name}
          </div>
          <div className="accordion-content">
            {item.content}
          </div>
        </div>
      );
    });

    return (
      <div className="accordion">
        {panes}
      </div>
    );
  }
});

module.exports = Accordion;
