import React, {useEffect, useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from "./components/NewTodo";
import {Todo} from './todo.model'
import Main from './components/Recruitment/Main'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); //tu się dzieje destrukturyzacja! use state zwraca tablicę z dwoma elementami(pierwszy to latest state snapshot, drugi to funkcja do update stan i rerender)  i tu od razu przypisujemy je do dwóch zmiennych
  //   //precyzujemy jaki dokładnie typ danych będzie przekazywany do useState
  //
  // const todoAddHandler = (text: string) => {
  //   setTodos(prevTodos =>[
  //       ...prevTodos,
  //       {id: Math.random().toString(), text: text}])
  // }
  //
  // const todoDeleteHandler = (todoId: string) => {
  //     setTodos(prevTodos => {
  //         return prevTodos.filter(todo => todo.id !== todoId) //jesli jest equal to
  //     })
  // }

  //   const [secondPageData, setSecondPageData] = useState<{}[]>([]);
  //   const [thirdPageData, setThirdPageData] = useState<{}[]>([]);


  return (
    <div className="App">
        <Main/>

      {/*<NewTodo todoAddHandler={todoAddHandler}/> //przekazuję pointer do funkcji jako props*/}
      {/*<TodoList*/}
      {/*    items={todos}*/}
      {/*    onDeleteTodo = {todoDeleteHandler}/>*/}
    </div>
  );
};

export default App;
