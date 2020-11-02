import React, { Component } from "react";
import AddUser from "./components/adduser";
import Users from "./components/users";
class App extends Component {
  // state ={
  //   users:[]
  // };
  constructor(props) {
    super(props);
      this.state={
        users:[
          {id:1,
          name:"erkan",
          age:45
          },
          {id:2,
          name:"havva",
          age:43
          },
          {id:3,
            name:"nadir",
            age:16
          }
        ]
      };
   }
  render() {
   
    
    return (
      <div className="container">
          <h4>User App</h4> 
          <hr/>
          <AddUser/>
          <hr />
          <Users />
      </div>
    );
  }
}

export default App;