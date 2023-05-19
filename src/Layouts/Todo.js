import React, { useState } from "react";
import './Todo.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState([]);
    const [isTodoListOpen, setIsTodoListOpen] = useState(true);

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };

    const removeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const closeNavadd = () => {
        setIsTodoListOpen(false);
    };

    if (!isTodoListOpen) {
        return null; // Don't render the TodoList component if it's closed
    }

    return (
        <div id="todolist" className="card pageside" style={{ background: '#EBF1F4' }}>
            <div className="close-side fa-2x">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNavadd}>
                    &times;
                </a>
            </div>
            <div className="content-wrapper margin-left">
                <div className="content-body p-20 side-bg">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2">
                            <h3 className="content-header-title">TODO LIST</h3>
                        </div>
                    </div>
                    <div className="row" style={{ background: '#EBF1F4' }}>
                        <div className="col-lg-12 col-md-12">
                            <div className="card list-view">
                                <div className="card-body">
                                    <form method="post" action="#">
                                        <div className="form-row mb-2">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    name="notes"
                                                    id="note_data"
                                                    className="form-control cust-width"
                                                    placeholder="What do you need to do today?"
                                                    value={newTodo}
                                                    onChange={(e) => setNewTodo(e.target.value)}
                                                    style={{ width: '16rem' }}
                                                />
                                            </div>
                                            <div className="col ">
                                                <button
                                                    type="submit"
                                                    className="btn btn-info addnote cust-width2"
                                                    onClick={addTodo}
                                                    style={{ width: '6rem' }}
                                                >
                                                    ADD
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    {/* todo list */}
                                    <div className="list-wrapper" id="all_list">
                                        <ul className="list-group todo-list">
                                            {todos.map((todo, index) => (
                                                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input mr-2"
                                                            id={`customCheck${index}`}
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor={`customCheck${index}`}
                                                        >
                                                            {todo}
                                                        </label>
                                                    </div>
                                                    <i
                                                        className="remove fa fa-times mdi-close-circle-outline"
                                                        onClick={() => removeTodo(index)}
                                                    ></i>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* end todo list */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;





// import React, { useState } from "react";
// import './Todo.css'


// const TodoList = () => {
//     const [todos, setTodos] = useState([]);
//     const [newTodo, setNewTodo] = useState([]);
//     const [isTodoListOpen, setIsTodoListOpen] = useState(true);

//     const addTodo = (e) => {
//         e.preventDefault();
//         if (newTodo.trim() !== "") {
//             setTodos([...todos, newTodo]);
//             setNewTodo("");
//         }
//     };

//     const removeTodo = (index) => {
//         const updatedTodos = [...todos];
//         updatedTodos.splice(index, 1);
//         setTodos(updatedTodos);
//     };

//     const closeNavadd = () => {
//         setIsTodoListOpen(false);
//     };

//     if (!isTodoListOpen) {
//         return null; // Don't render the TodoList component if it's closed
//     }

//     return (
//         <>

//             {/* <!--todo note--> */}
//             <div id="todolist" className="pageside">
//                 <div className="close-side">
//                     <a href="javascript:void(0)" className="closebtn" onclick="closeNavadd()">&times;</a>
//                 </div>
//                 <div className="content-wrapper margin-left">
//                     <div className="content-body p-20 side-bg">
//                         <div className="content-header row">
//                             <div className="content-header-left col-md-6 col-12 mb-2">
//                                 <h3 className="content-header-title">TODO LIST </h3>
//                             </div>

//                         </div>
//                         <div className="row">
//                             <div className="col-lg-12 col-md-12">
//                                 <div className="card list-view">
//                                     <div className="card-body">
//                                         <form method="post" action="#">
//                                             <div className="d-grid-2">
//                                                 <div className="form-group">
//                                                     <input type="text" name="notes" id="note_data" className="form-control" placeholder="What do you need to do today?" />
//                                                 </div>

//                                                 <div className="form-group">
//                                                     <button type="submit" className="btn btn-info addnote">ADD</button>
//                                                 </div>
//                                             </div>
//                                         </form>

//                                         {/* <!--todo list--> */}

//                                         <div className="list-wrapper" id="all_list">
//                                             <ul className="todo-list">
//                                                 <li>
//                                                     <div className="custom-control custom-checkbox">
//                                                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                                                         <label className="custom-control-label" for="customCheck1"> Create invoice </label>
//                                                     </div>
//                                                     <i className="remove fa fa-times mdi-close-circle-outline"></i>
//                                                 </li>
//                                                 <li>
//                                                     <div className="custom-control custom-checkbox">
//                                                         <input type="checkbox" className="custom-control-input" id="customCheck2" />
//                                                         <label className="custom-control-label" for="customCheck2"> Call John  </label>
//                                                     </div>

//                                                     <i className="remove fa fa-times  mdi-close-circle-outline"></i>
//                                                 </li>
//                                                 <li>

//                                                     <div className="custom-control custom-checkbox">
//                                                         <input type="checkbox" className="custom-control-input" id="customCheck3" />
//                                                         <label className="custom-control-label" for="customCheck3">Meeting with Alisa </label>
//                                                     </div>

//                                                     <i className="remove fa fa-times  mdi-close-circle-outline"></i>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <!--end todo--> */}



//             {/* <div id="todolist" className="pageside">
//                 <div className="close-side">
//                     <a href="javascript:void(0)" className="closebtn" onClick={closeNavadd}>
//                         &times;
//                     </a>
//                 </div>
//                 <div className="content-wrapper margin-left">
//                     <div className="content-body p-20 side-bg">
//                         <div className="content-header row">
//                             <div className="content-header-left col-md-6 col-12 mb-2">
//                                 <h3 className="content-header-title">TODO LIST</h3>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-lg-12 col-md-12">
//                                 <div className="card list-view">
//                                     <div className="card-body">
//                                         <form onSubmit={addTodo}>
//                                             <div className="d-grid-2">
//                                                 <div className="form-group">
//                                                     <input
//                                                         type="text"
//                                                         name="notes"
//                                                         id="note_data"
//                                                         className="form-control"
//                                                         placeholder="What do you need to do today?"
//                                                         value={newTodo}
//                                                         onChange={(e) => setNewTodo(e.target.value)}
//                                                     />
//                                                 </div>

//                                                 <div className="form-group">
//                                                     <button type="submit" className="btn btn-info addnote">
//                                                         ADD
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </form>

//                                         <div className="list-wrapper" id="all_list">
//                                             <ul className="todo-list">
//                                                 {todos.map((todo, index) => (
//                                                     <li key={index}>
//                                                         <div className="custom-control custom-checkbox">
//                                                             <input
//                                                                 type="checkbox"
//                                                                 className="custom-control-input"
//                                                                 id={`customCheck${index}`}
//                                                             />
//                                                             <label
//                                                                 className="custom-control-label"
//                                                                 htmlFor={`customCheck${index}`}
//                                                             >
//                                                                 {todo}
//                                                             </label>
//                                                         </div>
//                                                         <i
//                                                             className="remove fa fa-times mdi-close-circle-outline"
//                                                             onClick={() => removeTodo(index)}
//                                                         ></i>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//         </>
//     );
// };

// export default TodoList;
