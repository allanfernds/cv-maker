
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
          <button name={'educationallform'} onClick={this.addNewFormSection}>
            Adicionar mais uma seção
          </button>
        </div>

        <div>
        <h3>Experiência</h3>
        {professionalform.map((section, index) => <ProfessionalInfo key={index} /> )}
          <button name={'professionalform'} onClick={this.addNewFormSection}>
            Adicionar mais uma seção
          </button>
        </div>

        <div>
        <h3>Principais projetos</h3>
        {projectsform.map((section, index) => <ProjectsInfo key={index} /> )}
          <button name={'projectsform'} onClick={this.addNewFormSection}>
            Adicionar mais uma seção
          </button>
        </div>

        <div>
        <h3>Hard skills</h3>
        {skillsform.map((section, index) => <SkillsInfo key={index} /> )}
          <button name={'skillsform'} onClick={this.addNewFormSection}>
            Adicionar mais uma seção
          </button>
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