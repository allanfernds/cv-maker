import React, { Component } from 'react'

export default class SkillsInfo extends Component {
  render() {
    return (
      <div>
        SkillsInfo
        <label htmlFor='programmingLang'>Linguagem de programação: </label>
            <input
              name='programmingLang'
              id='programmingLang'
              type="text" 
            />
 
        <label htmlFor='experienceYears'>Experiencia: </label>
          <select id='experienceYears'name="experienceYears">
            <option>Menos de 1 ano</option>
            <option>1 a 2 anos</option>
            <option>2 a 3 anos</option>
            <option>3 a 4 anos</option>
            <option>4 a 5 anos</option>
            <option>Mais de 5 anos</option>
          </select>
      </div>
    )
  }
}
