import React from'react';
import './Notepad.css';
import Listitem from './Listitem';

class Notepad extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentitem:{
                text:"",
                key:''
            }
            
        }
        this.handleinput=this.handleinput.bind(this);
        this.additem=this.additem.bind(this);
    }

    handleinput(e){
        this.setState({
            currentitem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }
    additem(e){
        e.preventDefault();
        const newitem=this.state.currentitem;
        console.log(newitem);
        if(newitem.text!==""){
            const newitems=[...this.state.items,newitem];
            this.setState({
                items:newitems,
                currentitem:{
                    text:"",
                    key:""
                }
            })
    }
    }
    render(){
        return(
            <div className="notepad">
            <header>
            <h1>Notepad</h1>
                <form className="to-do-form" onSubmit={this.additem}>
                    
                    <input type="text"
                    value={this.state.currentitem.text}
                   onChange={this.handleinput}
                   placeholder=" Title"/>
                    <button type="submit">Add</button>
                </form>
            </header>
            <Listitem
            items={this.state.items}></Listitem>

            </div>
        )
    }
}






export default Notepad;