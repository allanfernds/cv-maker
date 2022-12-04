import React, { Component } from 'react'

export default class SkillsInfo extends Component {
  constructor() {
    super()
    this.state = {
      programmingLang: '',
      experienceTime: '', 
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { programmingLang, experienceTime } = this.state
    return (
      <form>
        SkillsInfo
        <label htmlFor='programmingLang'>Linguagem de programação: </label>
            <input
              name='programmingLang'
              id='programmingLang'
              type="text"              
              value={programmingLang}
              onChange={this.handleChange}
              required   
            />
 
        <label htmlFor='experienceTime'>Experiencia: </label>
          <select 
          id='experienceTime'
          name="experienceTime"
          value={experienceTime}
          onChange={this.handleChange}
          >
            <option>Menos de 1 ano</option>
            <option>1 a 2 anos</option>
            <option>2 a 3 anos</option>
            <option>3 a 4 anos</option>
            <option>4 a 5 anos</option>
            <option>Mais de 5 anos</option>
          </select>
      </form>
    )
  }
}
