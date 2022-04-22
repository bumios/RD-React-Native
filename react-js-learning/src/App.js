import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import MyInputForm from './MyInputForm';
import Counter from './features/counter/Counter';
import TSCounter from './features/counter/TSCounter';


// VARIABLES
const usersData = [
  {
    id: 1,
    name: "Duy",
    age: 11
  },
  {
    id:2, 
    name: "Nhat",
    age: 22
  },
  {
    id: 3,
    name: "Tran",
    age: 33
  },
  {
    id: 4,
    name: "Lu",
    age: 32
  },
  {
    id: 5,
    name: "Ki",
    age: 42
  }
]

function App(props) {
  const [editingId, setEditingId] = useState(null)
  const [inputedName, setName] = useState("")
  const [inputedAge, setAge] = useState("")
  const [listUser, setListUser] = useState(usersData)

  useEffect(() => {
    console.log("[LOG] useEffect")
  })

  useEffect(() => {
    console.log("[LOG] useEffect 2")
  }, [inputedName, inputedAge])

  useEffect(() => {
    console.log("[LOG] useEffect 3")
  }, [])

  // ADD
  const handleAddNew = (event) => {
    event.preventDefault();

    // Reset
    setEditingId(null);

    const ids = listUser.map(user => { return user.id });
    var itemId = Math.max(...ids) + 1;

    const newList = listUser.concat({id: itemId, name: inputedName, age: inputedAge });
    console.log("[LOG] Added name: %s, age: %d, current items: %d", inputedName, inputedAge, newList.length);
    setListUser(newList);
  };

  // UPDATE
  function beginUpdate(id) {
    const user = listUser.find(user => user.id === id);
    setName(user.name);
    setAge(user.age);
    setEditingId(user.id);
    console.log("[LOG] editing at user name: %s, age: %s", user.name, user.age)
  } 

  function handleUpdate() {
    if (editingId != null) {
      const userIndex = listUser.findIndex(user => user.id === editingId);      
      console.log("[LOG] Edited user at index: %d, with name: %s, age: %d", userIndex, inputedName, inputedAge);

      let newList = [...listUser];
      newList[userIndex].name = inputedName;
      newList[userIndex].age = inputedAge;
      setListUser(newList);

      // Reset
      setEditingId(null);
      // NOT-WORKING
      listUser[userIndex].name = inputedName;
      listUser[userIndex].age = inputedAge;
      setListUser(listUser);
    }
  }

  // DELETE
  function handleDelete(id) {
    const newList = listUser.filter(item => item.id !== id);
    setListUser(newList);
  }
  
  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <div>
      <MyInputForm setName={ setName } setAge={ setAge } inputedName={ inputedName } inputedAge={ inputedAge } editingId={ editingId } handleAddNew={ handleAddNew } handleUpdate={ handleUpdate }  />
      {/* <form className="form-container">
        <input type="text" placeholder="Your name" onChange={ event => setName(event.target.value) } value={ inputedName } />
        <input type="text" placeholder="Your age" onChange={ event => setAge(event.target.value) } value={ inputedAge } />
        { editingId == null ? <button type="button" className="primary-button" onClick={ handleAddNew }>Add</button> : <button type="button" className="primary-button" onClick={ handleUpdate }>Update</button>}
      </form> */}
      <table className="list-container">
        <tbody>
          <tr>
            <th className="list-section">Name</th>
            <th className="list-section">Age</th>
            <th className="list-section">Actions</th>
          </tr>
        </tbody>
        {
          listUser.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{ item.name }</th>
                  <th>{ item.age }</th>
                  <th>
                    <Counter />
                    <TSCounter />
                    <button className="edit-button" onClick={ () => { beginUpdate(item.id) } }>Edit</button>
                    <button className="delete-button" onClick={ () => { handleDelete(item.id) } }>Delete</button>
                  </th>
                </tr>
              </tbody>
            );
          })
        } 
        </table>
      </div>
    </div>
  ) 
}

export default App;


/* OLD CODE */
// setInterval(App, 1000)

// function ListUsers(props) {

//   const beginUpdate = (user) => {
//     props.beginUpdate(user)
//   }
  
//   const handleDelete = (id) => {
    
//     const result = props.users.filter(item => item.id !== id)
//     console.log("props.users-new ", result)
    
//   }

 
// }

// function Greeting(props) {
//   return <h2>Hello i'm { props.username }</h2>
// }

// function Hobby(props) {
//   return <h4>Hobby: { props.user.hobby }</h4>
// }

// class UserChapterComponent extends Component {

//   render() {
//     return <h3>{ this.props.chapter }</h3>;
//   }
// }

// class ExampleProps extends Component {

//   render() {
//     return< p style={{color: this.props.color}}>This is {this.props.text}</p>
//   }
// }

// class Clock extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() }
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     this.timerId = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//     clearInterval(this.timerId);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }

//   render() {
//     return (
//       <><ExampleProps color={'red'} text={"Duy"} /><h4>Current time is {this.state.date.toLocaleTimeString()}</h4></>
//     )
//   }
// }