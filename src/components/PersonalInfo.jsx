import React, { Component } from 'react'

export default class PersonalInfo extends Component {
  render() {
    return (
      <form>
        <h3>Dado Pessoais</h3>
        <label htmlFor='firstName'> Nome: </label>
          <input 
            id='firstName'
            name='firstName'
            type="text" 
            required
          />
        
        <label htmlFor='lastName'> Sobrenome: </label>
          <input 
            id='lastName'
            name='lastName'
            type="text" 
            required
          />

        <label htmlFor='email'> E-mail: </label>
          <input 
            id='email'
            name='email'
            type="email" 
            required
          />

        <label htmlFor='tel'> Telefone: </label>
          <input 
            id='tel'
            name='tel'
            type="tel" 
            required
          />
      </form>
    )
  }
}
