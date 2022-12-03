import React, { Component } from 'react'

export default class ProfessionalInfo extends Component {
  render() {
    return (
      <form>
        ProfessionalInfo
        <label htmlFor='company'> Empresa </label>
          <input 
            id='company'
            name='company'
            type="text" 
            required
          />
        
        <label htmlFor='office'> Cargo </label>
          <input 
            id='office'
            name='office'
            type="text" 
            required
          />
        
        <label htmlFor='tasks'> Tarefa realizada </label>
          <textarea
            maxLength={80} 
            id='tasks'
            name='tasks'
            type="text" 
            required
          />
        
        <label htmlFor='initialDate'> Início </label>
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


// 3.  Informações Profiossionais:
// 		Empresa,
// 		Cargo,
// 		Terefas Realizadas,
// 		Data de inicio, 
// 		Data do fim,
