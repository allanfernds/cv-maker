import React, { Component } from 'react'

export default class ProjectsInfo extends Component {
  render() {
    return (
        <form>
          <label htmlFor='project'>
            <p>Titulo do projeto: </p>
            <input 
            name='project'
            id='project'
            type="text" />
          </label>
          <label htmlFor='projectDescription'>
            <p>Descrição breve do projeto: </p>
            <textarea
            maxLength={70}
            name='projectDescription'
            id='projectDescription'
            type="text" />
          </label>
          <label htmlFor='projectTasks'>
            <p>Tarefas realizadas no desenvolvimento do projeto: </p>
            <textarea
            maxLength={120}
            name='projectTasks'
            id='projectTasks'
            type="text" />
          </label>
        </form>
    )
  }
}
