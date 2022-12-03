import React, { Component } from 'react'

export default class EducationalInfo extends Component {
  render() {
    return (
      <form>
      <label htmlFor='institution'> Instituição </label>
        <input 
          id='institution'
          name='institution'
          type="text" 
          required
        />
      
      <label htmlFor='course'> Curso </label>
        <input 
          id='course'
          name='course'
          type="text" 
          required
        />
      
      <label htmlFor='initialDate'> Inicio </label>
        <input 
          id='initialDate'
          name='initialDate'
          type="date" 
          required
        />
      
      <label htmlFor='finalDate'> Fim </label>
        <input 
          id='finalDate'
          name='finalDate'
          type="date" 
          required
        />
      
    </form>
    )
  }
}
