import React from "react"

class Filtros extends React.Component {

    render() {
  
      return (
        <div>
        <label>Ordenação:</label>
        <select
            name="ordenacao"
            value={this.props.ordenacao}
            onChange={this.props.onChangeOrdenacao}
        >
            <option value={-1}>Menor valor</option>
            <option value={1}>Maior valor</option>
        </select>
    </div>
      );
    }
  }
  
  export default Filtros;