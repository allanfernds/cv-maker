
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EducationalInfo from './components/EducationalInfo'
import PersonalInfo from './components/PersonalInfo'
import ProfessionalInfo from './components/ProfessionalInfo'
import ProjectsInfo from './components/ProjectsInfo'
import SkillsInfo from './components/SkillsInfo'
import generatePDF from './pdfmake/CvPdfMaker'

class App extends Component {
  constructor() {
    super()

    this.state = {
      personalform: [{section: ''}],
      educationallform: [{section: ''}],
      professionalform: [{section: ''}],
      projectsform: [{section: ''}],
      skillsform: [{section: ''}],
    }
  }

  addNewFormSection = ({target}) => {
    console.log(target.name)
    const { name } = target
    this.setState(prevState => ({
      [name]: [...prevState[name], {section: ''}]
    }))
    console.log(this.props)
  }

  removeFormSection = ({target}) => {
    const { name } = target
    const newArray = this.state[name]
    newArray.pop()
    newArray.length > 0 ? this.setState({ [name]: newArray}) : alert('Não é possivel remover')
  }

  render() {
    const { userInfo } = this.props
    const { educationallform, professionalform, projectsform, skillsform } = this.state
    return (
      <main>

        <div>
          <h3>Sobre você</h3>
        <PersonalInfo />
        </div>

        <div>
        <h3>Formação</h3>
        {educationallform.map((section, index) => <EducationalInfo key={index} /> )}
          <div>
          <button 
            className='add-more-section-btn'
            name={'educationallform'} onClick={this.addNewFormSection}>
            +
          </button>
          <button 
            className='remove-btn'
            name={'educationallform'} onClick={this.removeFormSection}>
            x
          </button>
          </div>
        </div>

        <div>
        <h3>Experiência</h3>
        {professionalform.map((section, index) => <ProfessionalInfo key={index} /> )}
        <div>
          <button 
            className='add-more-section-btn'
            name={'professionalform'} onClick={this.addNewFormSection}>
            +
          </button>
          <button 
            className='remove-btn'
            name={'professionalform'} onClick={this.removeFormSection}>
            x
          </button>
          </div>
        </div>

        <div>
        <h3>Principais projetos</h3>
        {projectsform.map((section, index) => <ProjectsInfo key={index} /> )}
        <div>
          <button 
            className='add-more-section-btn'
            name={'projectsform'} onClick={this.addNewFormSection}>
            +
          </button>
          <button 
            className='remove-btn'
            name={'projectsform'} onClick={this.removeFormSection}>
            x
          </button>
          </div>
        </div>

        <div>
        <h3>Hard skills</h3>
        {skillsform.map((section, index) => <SkillsInfo key={index} /> )}
        <div>
          <button 
            className='add-more-section-btn'
            name={'skillsform'} onClick={this.addNewFormSection}>
            +
          </button>
          <button 
            className='remove-btn'
            name={'skillsform'} onClick={this.removeFormSection}>
            x
          </button>
          </div>
        </div>

      <button
      onClick={() => generatePDF(userInfo)}
      >Gerar PDF</button>
      </main>
    )
  }
}


const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps)(App)