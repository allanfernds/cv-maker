import React, { Component } from 'react'

export default class ProfessionalInfo extends Component {
  constructor() {
    super()
    this.state = {
      company: '',
      office: '',
      tasks: '',
      initialDate: '',
      finalDate: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { company, office, tasks, initialDate, finalDate } = this.state
    return (
      <form>
        ProfessionalInfo
        <label htmlFor='company'> Empresa </label>
          <input 
            id='company'
            name='company'
            type="text"
            value={company}
            onChange={this.handleChange}  
            required
          />
        
        <label htmlFor='office'> Cargo </label>
          <input 
            id='office'
            name='office'
            type="text"
            value={office}
            onChange={this.handleChange} 
            required
          />
        
        <label htmlFor='tasks'> Tarefa realizada </label>
          <textarea
            maxLength={80} 
            id='tasks'
            name='tasks'
            type="text"
            value={tasks}
            onChange={this.handleChange} 
            required
          />
        
        <label htmlFor='initialDate'> Início </label>
          <input 
            id='initialDate'
            name='initialDate'
            type="date"
            value={initialDate}
            onChange={this.handleChange} 
            required
          />
        
        <label htmlFor='finalDate'> Fim </label>
          <input 
            id='finalDate'
            name='finalDate'
            type="date"
            value={finalDate}
            onChange={this.handleChange} 
            required
          />
        
      </form>
    )
  }
}


// 3.  Informações Profiossionais:
// 		Empresa,
// 		Cargo,
// 		Terefas Realizadas,
// 		Data de inicio, 
// 		Data do fim,
