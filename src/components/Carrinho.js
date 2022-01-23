import React from "react";

export default class Produto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantidade: 0
        };
        //eventos
        this.add = this.add.bind(this);
        this.revome = this.remove.bind(this);
    }
    add() {
        this.setState({
            quantidade: this.state.quantidade + 1
        });
    }
    remove() {
        this.setState({
            quantidade: this.state.quantidade - 1
        });
      }
        render() {
            return (
                <div>
                        <div>
                            <h4>
                                {this.nome}: R$ {this.valor}
                            </h4>
                        </div>
                        <div   >
                            quantidade: {this.props.quantidade}
                        </div>
                        <div>
                            <div>
                                <button   >informações</button>
                            </div>
                            <div>
                                <button onClick={this.add} >+1</button>
                                <button onClick={this.remove} >-1</button>
                            </div>
                        </div>
                </div>
            )
        };
    }