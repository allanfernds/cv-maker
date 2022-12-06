import { connect } from 'react-redux'
import React, { Component } from 'react'
import { savePersonalInfo } from '../redux/actions'
class PersonalInfo extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
      github: '',
    }
  }

  saveInfoOnStore = (event) => {
    event.preventDefault()
    const { dispatch } = this.props 
    dispatch(savePersonalInfo(this.state))
  }


  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { firstName, lastName, email, tel, github } = this.state
    return (
      <form>
        <label htmlFor='firstName'> Nome: </label>
          <input 
            id='firstName'
            name='firstName'
            type="text"
            value={firstName}
            onChange={this.handleChange} 
            required
          />
        
        <label htmlFor='lastName'> Sobrenome: </label>
          <input 
            id='lastName'
            name='lastName'
            type="text" 
            value={lastName}
            onChange={this.handleChange}  
            required
          />

        <label htmlFor='email'> E-mail: </label>
          <input 
            id='email'
            name='email'
            type="email" 
            value={email}
            onChange={this.handleChange}  
            required
          />

        <label htmlFor='email'> GitHub: </label>
          <input 
            id='github'
            name='github'
            type="text" 
            value={github}
            onChange={this.handleChange}  
            required
          />

        <label htmlFor='tel'> Telefone: </label>
          <input 
            id='tel'
            name='tel'
            type="tel"
            value={tel}
            onChange={this.handleChange}   
            required
          />
          <button
            className='save-btn'
            type='submit'
            onClick={this.saveInfoOnStore}
          >
            Salvar
          </button>
      </form>
    )
  }
}


export default connect()(PersonalInfo)