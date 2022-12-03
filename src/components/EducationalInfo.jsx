import React, { Component } from 'react'

export default class EducationalInfo extends Component {
  render() {
    return (
      <form>
      ProfessionalInfo
      <label htmlFor='institution'>
        <p>Instituição: </p>
        <input 
          id='institution'
          name='institution'
          type="text" 
          required
        />
      </label>
      <label htmlFor='course'>
        <p>Curso: </p>
        <input 
          id='course'
          name='course'
          type="text" 
          required
        />
      </label>
      <label htmlFor='initialDate'>
        <p>Data inicial: </p>
        <input 
          id='initialDate'
          name='initialDate'
          type="date" 
          required
        />
      </label>
      <label htmlFor='finalDate'>
        <p>Data Final: </p>
        <input 
          id='finalDate'
          name='finalDate'
          type="date" 
          required
        />
      </label>
    </form>
    )
  }
}
