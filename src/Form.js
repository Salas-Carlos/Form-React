import React from 'react';

import './Form.css';


class Mailing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Phone: '',
      Text: ''
    };

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({Name: event.target.value});
  }

  handleEmail(event) {
    this.setState({Email: event.target.value});
  }

  handlePhone(event) {
    this.setState({Phone: event.target.value});
  }

  handleText(event) {
    this.setState({Text: event.target.value});
  }

  handleSubmit(event) {
    alert(
      "Nombre:"+ this.state.Name+
      "  Email:"+ this.state.Email+
      "  Phone:"+ this.state.Phone+
      "  Text:"+ this.state.Text
    );
    event.preventDefault();
  }


  render() {
    return (
     <div class="container">  
  <form id="contact" onSubmit={this.handleSubmit}>
    <h3>Agregar Datos</h3>
    <h4>Registrar para recibir informacion</h4>
    <fieldset>
      <input placeholder="Nombre" type="nombre" onChange={this.handleName}/>
    </fieldset>
    <fieldset>
      <input placeholder="Email" type="email" onChange={this.handleEmail}/>
    </fieldset>
    <fieldset>
      <input placeholder="Telefono" type="tel"  onChange={this.handlePhone}/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Mensaje"  onChange={this.handleText}></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>
    );
  }
}

export default Mailing;
