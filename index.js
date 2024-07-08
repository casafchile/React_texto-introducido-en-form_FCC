class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);                  //se definen los this.handler
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {                                                //state del input
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {                                                //state del submit
    // Change code below this line
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
          <input value={this.state.input} onChange={this.handleChange}/>      {/* input */}
          {/* Change code above this line */}
          <button type='submit'>Submit!</button>                              {/* boton */}
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>                    {/* Muestra el dato introducido en el form y confirmado con el submit */}
        {/* Change code above this line */}
      </div>
    );
  }
}
