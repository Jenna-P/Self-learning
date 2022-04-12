import React, { useState, useReducer } from 'react';
import './App.css';
import Student from './Student';

const initialState = {
    count: 0,
    students: [],
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name: name,
                isHere: false,
            }
            return {
                count : state.count +1,
                students: [...state.students, newStudent],
            }
        case 'delete-student':
            return {
                count: state.count -1,
                students: state.students.filter(student => student.id !== action.payload.id)
            }
        case 'mark-student':
            return {
                count: state.count,
                students: state.students.map(student => {
                    if(student.id === action.payload.id) {
                        return {...student, isHere: !student.isHere};
                    }
                    return student;
                })
            }
        default: 
        return state;
    }
}

function Exe2() {
    const [name, setName] = useState("");
    const [studentInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <p>Total students : {studentInfo.count}</p>
      <input type="text" 
             placeholder="Enter name" 
             value={name} 
             onChange={(e) => {
                setName(e.target.value); }}
       />
      <button onClick={() => { dispatch({type: 'add-student', payload: {name}})}}>ADD</button>
      {studentInfo.students.map(student => { return <Student key={student.id} studentName={student.name} id={student.id} dispatch={dispatch} isHere={student.isHere}/>})}
    </div>
  )
}

export default Exe2
