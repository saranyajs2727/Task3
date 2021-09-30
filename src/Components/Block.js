import {Button,Row,Col,ListGroup} from "react-bootstrap";

import React, { Component } from 'react'

class Block extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput : "",
            title:"",
            list:[],
            lists:[]
          }
     }
     updateInput(value){
        this.setState({
          userInput: value,
        });
      }
      updateTitle(value){
        this.setState({
          title: value,
        });
      }
      addItem(){
        if(this.state.userInput !== '' && this.state.title !== '' ){
          const userInput = {
            id :  Math.random(),
            value : this.state.userInput
          };
          const title = {
            id :  Math.random(),
            value : this.state.title
          };
      
          // Update list
          const list = [...this.state.list];
          list.push(userInput);
          this.setState({
            list,
            userInput:""
          });
          const lists = [...this.state.lists];
          list.push(title);
          this.setState({
            list,
            userInput:"",
            lists,
            title:""
          });
        }
      }
  
      deleteItem(key){
        const list = [...this.state.list];
        const lists=[...this.state.lists];

        const updateList = list.filter(item => item.id !== key);
        const updateLists = lists.filter(item => item.id !== key);
        
        this.setState({
          list:updateList,
          lists:updateLists
        });
      
      }
      
      
    render() {
        return(
            <div>
            <div className="content">
            <div className="image">
                <img src="/Images/img.jpg" alt="BigCo Inc. logo" width="800px" height="400px"/>
            </div>
            <div className="blog">
            <form >
            <input type="text"  placeholder="Title" className="title"
            value = {this.state.title}
            onChange = {item => this.updateTitle(item.target.value)} /> <br/>
                <input type="text"  placeholder="Write your block" className="ownblog"
                value = {this.state.userInput}
                onChange = {item => this.updateInput(item.target.value)}
                /> <br/>

                <Button variant="primary"  className="submit"><a href="#" className='btn'
                onClick = {()=>this.addItem()}>ADD BLOG</a></Button>            
            </form>
        
             
            </div>
            </div>
          
         
           
            <Row>
     <Col md={{ span: 5, offset: 4 }}>
        <ListGroup>
         {this.state.list.map(item => {return(
            <Button variant="outline-success" className="delete"
            onClick = { () => this.deleteItem(item.id) }>
           {item.value}<i class="fa fa-close seach"></i></Button>

          /*  <ListGroup.Item variant="success" action 
              onClick = { () => this.deleteItem(item.id) }>
              {item.value}
            </ListGroup.Item> */
         )})}
        </ListGroup>
     </Col>
   </Row>
   
        </div>
        );
        
}
}

export default Block;