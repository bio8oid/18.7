var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        <div className = {'contactItem'}>
          
          <img className = {'contactImage'} src = {'./ico.ico'} />
          <p className = {'contactLabel'}>
            Name: {this.props.item.firstName}
          </p>
          <p className = {'contactLabel'}>
            Surname: {this.props.item.lastName}
          </p>
          <p>
            <a className = {'contactEmail'} href = {'mailto:' + this.props.item.email}>
              {this.props.item.email}
            </a>
          </p>
        </div>
        )     
      }
    });
