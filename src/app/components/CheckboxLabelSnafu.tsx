// import React, {useState} from 'react'
// import './App.css'
//
// // TODO:
// // input + button to add
// // checkbox + label
// // useState(TODOS[])
//
// const CheckboxLabelSnafu = () => {
//     const [inputValue, setInputValue] = useState('')
//     const [todos, setTodos] = useState({});
//
//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     }
//
//     const handleAddTodoClick = () => {
//         if (!inputValue) {
//             return;
//         }
//         setTodos((prevState) => {
//             const newTodoIndex = Object.keys(todos).length
//
//             return {...prevState, [newTodoIndex]: {value: inputValue, checked: false}};
//         })
//         setInputValue('')
//     }
//
//     const handleOnCheckClick = (index, checked) => {
//         // index into todosMap updated
//         const newState = {...todos, [index]: {...todos[index], checked: !checked}};
//         console.table(newState)
//         setTodos(newState)
//     }
//
//     return (
//         <div className="app">
//             <label className='label'>
//                 <span>Please add a TODO!</span>
//                 <input type='text' value={inputValue} onChange={handleInputChange}/>
//             </label>
//             <button onClick={handleAddTodoClick}>Add TODO!</button>
//             <div className="todos-column">
//                 {Object.entries(todos).map(([index, todo]) => {
//                     const {value, checked} = todo;
//                     return (
//                         <label
//                             key={`${index}-${value}`}
//                             onClick={() => {
//                                 console.log("clicking", index)
//                                 handleOnCheckClick(index, checked)
//                             }}
//                         >
//                             <input type="checkbox" checked={checked}/>
//                             <span>{JSON.stringify(checked)}</span>
//                             <span>{value}</span>
//                         </label>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
