import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../img/logo.png';

// data
import { todos } from '../todos.json';



class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 text-center py-5" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>
                <mark>{todo.responsible}</mark>
              </p>
            </div>
            <div className="card-footer text-center">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });

    // RETURN THE COMPONENT Navbar
    return (
      <div className="App">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark text-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">ECOARTE</h5>
          <span className="badge badge-pill badge-danger ml-2">
            {todos.length}
          </span>
          <nav className="my-2 my-md-0 mr-md-3 ">
            <a className="p-2 text-white" href="/">
              Inicio
            </a>
            <a className="p-2 text-white" href="/">
              Instrucciones
            </a>
            <a className="p-2 text-white" href="/">
              Mapa
            </a>
          </nav>
          <a className="btn btn-outline-primary" href="/">
            Registrarme
          </a>
        </div>

        <div className="container ">
          <div className="row mt-4">
            <div className="col-md-4 text-center py-3">
              <img src={logo} className="App-logo " alt="logo" />
            </div>

            <div className="col-md-8">
              <div className="row">{todos}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
