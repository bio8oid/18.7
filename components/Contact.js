var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        <div className = {'contactItem'}>
          
        
          <img className = {'contactImage'} src = {'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwj_5PaesYDjAhVJxKYKHdqxCksQjRx6BAgBEAU&url=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fthe-muppets&psig=AOvVaw1Cm4Eb8y1av2npgSiLmb2_&ust=1561406128886851'} />
          <p className = {'contactLabel'}>
            Imię: {this.props.item.firstName}
          </p>
          <p className = {'contactLabel'}>
            Nazwisko: {this.props.item.lastName}
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