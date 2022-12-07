import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { name, addSection, removeSection } = this.props
    return (
      <div className='btn-section'>
        <button
          className='add-more-section-btn'
          name={name} onClick={addSection}>
          Adicionar mais uma seção
        </button>
        <button
          className='remove-btn'
          name={name} onClick={removeSection}>
          Remover seção acima
        </button>
      </div>
    )
  }
}
