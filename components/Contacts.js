var contacts = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  },
  {
    id: 2,
    firstName: 'Mark',
    lastName: 'Smith',
    email: 'mark.smith@example.com'
  },
  {
    id: 3,
    firstName: 'Jack',
    lastName: 'Turner',
    email: 'jack.turner@example.com'
  }
];


var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    });

    return (
      <ul className = {'contactsList'}>
        {contacts}
      </ul>
    )
  }
});
