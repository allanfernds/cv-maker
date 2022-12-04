import React, { Component } from 'react'

export default class EducationalInfo extends Component {
  constructor() {
    super()
    this.state = {
      institution: '',
      course: '',
      initialDate: '',
      finalDate: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { institution, course, initialDate, finalDate } = this.state
    return (
      <form>
      <label htmlFor='institution'> Instituição </label>
        <input 
          id='institution'
          name='institution'
          type="text"
          onChange={this.handleChange}
          value={institution}
          required
        />
      
      <label htmlFor='course'> Curso </label>
        <input 
          id='course'
          name='course'
          type="text"
          onChange={this.handleChange}
          value={course} 
          required
        />
      
      <label htmlFor='initialDate'> Inicio </label>
        <input 
          id='initialDate'
          name='initialDate'
          type="date"
          onChange={this.handleChange}
          value={initialDate} 
          required
        />
      
      <label htmlFor='finalDate'> Fim </label>
        <input 
          id='finalDate'
          name='finalDate'
          type="date"
          onChange={this.handleChange}
          value={finalDate}
          required
        />
      
    </form>
    )
  }
}