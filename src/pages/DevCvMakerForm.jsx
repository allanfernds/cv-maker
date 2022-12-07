
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import EducationalInfo from '../components/EducationalInfo'
import PersonalInfo from '../components/PersonalInfo'
import ProfessionalInfo from '../components/ProfessionalInfo'
import ProjectsInfo from '../components/ProjectsInfo'
import SkillsInfo from '../components/SkillsInfo'
import generatePDF from '../pdfmake/CvPdfMaker'

class DevCvMakerForm extends Component {
  constructor() {
    super()

    this.state = {
      personalform: [{ section: '' }],
      educationalform: [{ section: '' }],
      professionalform: [{ section: '' }],
      projectsform: [{ section: '' }],
      skillsform: [{ section: '' }],
    }
  }

  addNewFormSection = ({ target }) => {
    console.log(target.name)
    const { name } = target
    this.setState(prevState => ({
      [name]: [...prevState[name], { section: '' }]
    }))
    console.log(this.props)
  }

  removeFormSection = ({ target }) => {
    const { name } = target
    const newArray = this.state[name]
    newArray.pop()
    newArray.length > 0 ? this.setState({ [name]: newArray }) : alert('Não é possivel remover')
  }

  render() {
    const { userInfo } = this.props
    const { educationalform, professionalform, projectsform, skillsform } = this.state
    return (
      <main>

        <div>
          <h3>Sobre você</h3>
          <PersonalInfo />
          <br />
        </div>

        <div>
          <h3>Formação</h3>
          {educationalform.map((section, index) => <EducationalInfo key={index} />)}
          <Button name='educationalform' addSection={this.addNewFormSection} removeSection={this.removeFormSection} />
          <br />
        </div>

        <div>
          <h3>Experiência</h3>
          {professionalform.map((section, index) => <ProfessionalInfo key={index} />)}
          <Button name='professionalform' addSection={this.addNewFormSection} removeSection={this.removeFormSection} />
          <br />
        </div>

        <div>
          <h3>Principais projetos</h3>
          {projectsform.map((section, index) => <ProjectsInfo key={index} />)}
          <Button name='projectsform' addSection={this.addNewFormSection} removeSection={this.removeFormSection} />
          <br />
        </div>

        <div>
          <h3>Aptidões</h3>
          {skillsform.map((section, index) => <SkillsInfo key={index} />)}
          <Button name='skillsform' addSection={this.addNewFormSection} removeSection={this.removeFormSection} />
          <br />
        </div>

        <button
          className='generatepdf-btn'
          onClick={() => generatePDF(userInfo)}
        >Gerar PDF</button>
      </main>
    )
  }
}


const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps)(DevCvMakerForm)