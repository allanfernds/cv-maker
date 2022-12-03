import React, { Component } from 'react'

export default class ProjectsInfo extends Component {
  render() {
    return (
        <form>
          <label htmlFor='project'> Projeto: </label>
            <input 
              name='project'
              id='project'
              type="text" 
            />

          <label htmlFor='projectDescription'> Descrição </label>
            <textarea
              maxLength={70}
              name='projectDescription'
              id='projectDescription'
              type="text" 
            />

          <label htmlFor='projectTasks'> Tarefas realizadas </label>
            <textarea
              maxLength={120}
              name='projectTasks'
              id='projectTasks'
              type="text" 
            />

        </form>
    )
  }
}
