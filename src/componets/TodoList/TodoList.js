import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './TodoList.css';
import TodoItems from '../TodoItems/TodoItems'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { taskStr: '', items: props.lst.items,name:props.lst.name};
        this.addItem = this.addItem.bind(this);
        this.setTaskStr = this.setTaskStr.bind(this);      
        this.deleteItem = this.deleteItem.bind(this);   
        this.updateItem = this.updateItem.bind(this);   
    }

    addItem(e) {
        if (this.state.taskStr !== '' && this.state.taskStr !== undefined) {
            var item = {
                taskStr: this.state.taskStr,
                key: Date.now() + this.state.taskStr
            };
            this.setState((prev => {
                return { items: prev.items.concat(item), taskStr: '' };
            }),()=>{console.log(this.state.items)});
        }
        this.taskInput.focus();
        e.preventDefault();
    }

    deleteItem(item){
        var filtered =this.state.items.filter((aux)=>{
            return aux.key !== item.key;
        });
        this.setState({items: filtered});
        this.taskInput.focus();
        //actualizamos a backend
    }

    updateItem(item,value,isDone){
        alert('updating ' + value + ' ' + isDone);
        //actualizamos a backend
    }

    setTaskStr(evt) {
        this.setState({ taskStr: evt.target.value });
    }

    render() {
        var cardS = { padding: 10, "width": "100%" };
        var formS = { padding: 10 };
        return (
            <div className="card list" style={cardS}>
                <div className="card-body" style={{ padding: 1 }}>
                    <h5 className="card-title">{this.state.name}</h5>
                    <form style={formS} onSubmit={this.addItem} onChange={this.setTaskStr}>
                        <input type="text" ref={(ref) => { this.taskInput = ref }} value={this.state.taskStr} placeholder="Ingresa tarea..."></input>
                        <button className={this.state.taskStr!=='' && this.state.taskStr!==undefined?'btnCustom bgBlue':'btnCustom bgGray'} type="submit">Ok</button>
                    </form>
                    <TodoItems  items ={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}></TodoItems>
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.taskInput.focus();
    }

}
