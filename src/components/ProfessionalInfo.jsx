import React, { Component } from 'react'
import { connect } from 'react-redux';
import { saveProfessionalInfo } from '../redux/actions';

class ProfessionalInfo extends Component {
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


  saveInfoOnStore = (event) => {
    event.preventDefault()
    const { dispatch } = this.props 
    dispatch(saveProfessionalInfo(this.state))
  }


  render() {
    const { company, office, tasks, initialDate, finalDate } = this.state
    return (
      <form>
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
        <button
          type='submit'
          onClick={this.saveInfoOnStore}
        >
          Salvar
        </button>
      </form>
    )
  }
}

export default connect()(ProfessionalInfo)