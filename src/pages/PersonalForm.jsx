import React, { Component } from 'react'

export default class PersonalForm extends Component {
  render() {
    return (
      <>
      <form>
        <label htmlFor='name'>
          <p>Nome: </p>
          <input 
          id='name'
          name='name'
          type='text'
          required
          />
        </label>
        <label htmlFor='lastName'>
          <p>Sobrenome: </p>
          <input 
          id='lastName'
          name='LastName'
          type='text'
          required
          />
        </label>
        <label htmlFor='email'>
          <p>E-mail: </p>
          <input 
          id='email'
          name='email'
          type='email'
          required
          />
        </label>
        <label htmlFor='tel'>
          <p>Numero de Telefone: </p>
          <input 
          id='tel'
          name='tel'
          type='tel'
          required
          />
        </label>
        <label htmlFor='github'>
          <p>Github: </p>
          <input 
          id='github'
          name='github'
          type='text'
          required
          />
        </label>
      </form>
      </>
    )
  }
}
