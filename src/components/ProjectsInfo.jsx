import React, { Component } from 'react'
import { connect } from 'react-redux';
import { saveProjectsInfo } from '../redux/actions';

class ProjectsInfo extends Component {
  constructor() {
    super()
    this.state = {
      projectName: '',
      projectDescription: '',
      projectTasks: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveInfoOnStore = (event) => {
    event.preventDefault()
    const { dispatch } = this.props 
    dispatch(saveProjectsInfo(this.state))
  }


  render() {
    const { projectName, projectDescription, projectTasks } = this.state
    return (
        <form>
          <label htmlFor='projectName'> Projeto: </label>
            <input 
              name='projectName'
              id='projectName'
              type="text"
              value={projectName}
              onChange={this.handleChange}
              required   
            />

          <label htmlFor='projectDescription'> Descrição: </label>
            <textarea
              maxLength={70}
              name='projectDescription'
              id='projectDescription'
              type="text"
              value={projectDescription}
              onChange={this.handleChange}
              required  
            />

          <label htmlFor='projectTasks'> Tarefa realizada: </label>
            <textarea
              maxLength={120}
              name='projectTasks'
              id='projectTasks'
              type="text"
              value={projectTasks}
              onChange={this.handleChange}
              required  
            />
          <button
            className='save-btn'
            type='submit'
            onClick={this.saveInfoOnStore}
          >
          Salvar
        </button>
        </form>
    )
  }
}

export default connect()(ProjectsInfo)