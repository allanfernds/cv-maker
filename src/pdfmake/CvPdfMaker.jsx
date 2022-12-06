/* eslint-disable no-unused-vars */

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from  'pdfmake/build/vfs_fonts';

const generatePDF = (data) => {
    const { personalInfo, educationalInfo, professionalInfo, projectsInfo, skillsInfo } = data
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const header = [
      {
        text: personalInfo[0].firstName +' '+ personalInfo[0].lastName,
        fontSize: 20,
        alignment: 'center',
        bold: true,
        margin: [15, 20, 0, 45],
      },
    ];

    const educationalMap = data.educationalInfo.map((info) => (
      [{columns: [
          {text: info.institution , 
            fontSize: 12, 
            alignment: 'left', 
            bold: true, 
            margin: [15, 0, 0, 0]
          },
          {
            text: '('+ info.initialDate + ' / ' + info.finalDate +')',
            color: 'gray', 
            italics: true,
            fontSize: 10,
            alignment: 'right',
            margin: [0, 0, 15, 0]
          }
      ]},
          {
            text: info.course, 
            color: 'gray', 
            italics: true,
            alignment: 'left',
            margin: [15, 3],
          },
      
      ]
      
    ))

    const professionalMap = data.professionalInfo.map((info) => (
      [{columns: [
        {text: info.company , 
          fontSize: 12, 
          alignment: 'left', 
          bold: true, 
          margin: [15, 0, 0, 0]
        },
        {
          text: '('+ info.initialDate + ' / ' + info.finalDate +')',
          color: 'gray', 
          italics: true,
          fontSize: 10,
          alignment: 'right',
          margin: [0, 0, 15, 0]
        }
    ]},
        {
          text: info.office, 
          color: 'gray', 
          fontSize: 11,
          bold: true,
          alignment: 'left',
          margin: [15, 3],
        },
        {
          text: info.tasks, 
          color: 'gray',
          fontSize: 10, 
          alignment: 'left',
          margin: [25, 3],
        }
        ,
    
    ]
    ))

    const projectsMap = data.projectsInfo.map((info) => (
      [
        {text: info.projectName, 
          fontSize: 12, 
          alignment: 'left', 
          bold: true, 
          margin: [15, 0, 0, 0]
        },
        {
          text: info.projectDescription,
          color: 'gray', 
          fontSize: 11,
          alignment: 'left',
          margin: [15, 0, 15, 0]
        },
        {
          text: info.projectTasks, 
          color: 'gray', 
          fontSize: 11,
          italics: true,
          alignment: 'left',
          margin: [25, 3],
        }
    ]
    ))

    const personalSection = [
            {columns:[
      {
        text: personalInfo[0].email,
        fontSize: 10,
        alignment: 'left',
        margin: [15, 0],
      },
      {
        text: personalInfo[0].tel,
        fontSize: 10,
        alignment: 'center',
        margin: [15, 0],
      },
      {
        text: 'github.com/' + personalInfo[0].github,
        fontSize: 10,
        alignment: 'right',
        margin: [15, 5 , 15, 0],
      }]}
    ];

    const skillsMap = data.skillsInfo.map((info) => (
      [
        {
          text: info.programmingLang , 
          fontSize: 12, 
          margin: [15, 1, 0, 1]
        },
        {
          text: info.experienceTime + ' de experiência' ,
          italics: true, 
          fontSize: 11, 
          margin: [0, 1, 0, 1]
        },
    ]
    ))

    //---------------------------------------------------------------

    const educationalSection = [
      {
        text: 'FORMAÇÃO____________________________________________________________________',
        fontSize: 15,
        alignment: 'left',
        bold: true,
        margin: [15, 15, 5, 15],
      },
      ...educationalMap
    ];

    const profesionalSection = [
      {
        text: 'EXPERIÊNCIA__________________________________________________________________',
        fontSize: 15,
        alignment: 'left',
        bold: true,
        margin: [15, 15, 5, 15],
      },
      ...professionalMap
    ];

    const projectsSection = [
      {
        text: 'PRINCIPAIS PROJETOS________________________________________________________',
        fontSize: 15,
        alignment: 'left',
        bold: true,
        margin: [15, 15, 5, 15],
      },
      ...projectsMap
    ];

    const skillsSection = [
      {
        text: 'HARD SKILLS_________________________________________________________________',
        fontSize: 15,
        alignment: 'left',
        bold: true,
        margin: [15, 15, 5, 15],
      },
      {
        table: {
          headerRows: 1,
          widths: ['*','*','*','*',],
          body: [...skillsMap],
        },
        layout: 'noBorders'
      },
      
    ];

    const docDefinitions = {
      pageSize: 'A4',
      pageMargins: [15, 50, 15, 40],

      header:[header],
      content:[personalSection, educationalSection,profesionalSection, projectsSection, skillsSection],
      footer: ['']

    }
    pdfMake.createPdf(docDefinitions).download()
}

export default generatePDF