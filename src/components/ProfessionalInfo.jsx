import React, { Component } from 'react'

export default class ProfessionalInfo extends Component {
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
        <label htmlFor='office'>
          <p>Cargo: </p>
          <input 
            id='office'
            name='office'
            type="text" 
            required
          />
        </label>
        <label htmlFor='tasks'>
          <p>Tarefa Realizada: </p>
          <textarea
            maxLength={80} 
            id='tasks'
            name='tasks'
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


// 3.  Informações Profiossionais:
// 		Empresa,
// 		Cargo,
// 		Terefas Realizadas,
// 		Data de inicio, 
// 		Data do fim,
