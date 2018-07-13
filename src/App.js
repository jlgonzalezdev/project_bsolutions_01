import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { TodoList } from './componets/TodoList/TodoList'
class App extends Component {

  constructor(props) {
    super(props);
    this.lstInput = {};
    this.state = {
      lstStr: '',
      lists: [{
        key: 'lst01', name: 'Mis Pendientes',
        items: [{ key: '01', taskStr: 'tarea 01',isDone:false },
        { key: '02', taskStr: 'tarea 02',isDone:false }]
      }]
    };
    this.addList = this.addList.bind(this);
    this.setLstStr = this.setLstStr.bind(this);

  }

  addList(e) {
    if (this.state.lstStr !== '' && this.state.lstStr !== null) {
      var newLst = { key: Date.now() + this.state.lstStr, name: this.state.lstStr, items: [] };
      this.setState((prev) => { return { lstStr: '', lists: prev.lists.concat(newLst) } });
      this.lstInput.value = '';
    }
    e.preventDefault();
  }

  setLstStr() {
    this.setState({ lstStr: this.lstInput.value });
  }

  render() {
    var listsJSX = this.state.lists.map((lst) => {
      return <div className="col-3"><TodoList key={lst.key} lst={lst}></TodoList></div>;
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BSolutions Todo List</h1>
        </header>
        <div className="row">
          {listsJSX}
          <div className="col-3">
            <div className="card list" style={{ position: 'absolute' }}>
              <div className="card-body" style={{ padding: 1 }}>
                <form onSubmit={this.addList}>
                  <input type="text" ref={(ref) => { this.lstInput = ref }} onChange={this.setLstStr} placeholder="Ingresa lista..."></input>
                  <button className={this.state.lstStr !== '' && this.state.lstStr !== undefined ? 'btnCustom bgBlue' : 'btnCustom bgGray'} type="submit">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
