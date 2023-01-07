import React, {useEffect, useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from "./components/NewTodo";
import {Todo} from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); //tu się dzieje destrukturyzacja! use state zwraca tablicę z dwoma elementami(pierwszy to latest state snapshot, drugi to funkcja do update stan i rerender)  i tu od razu przypisujemy je do dwóch zmiennych
    //precyzujemy jaki dokładnie typ danych będzie przekazywany do useState

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos =>[
        ...prevTodos,
        {id: Math.random().toString(), text: text}])
  }

  const todoDeleteHandler = (todoId: string) => {
      setTodos(prevTodos => {
          return prevTodos.filter(todo => todo.id !== todoId) //jesli jest equal to
      })
  }

    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'PUT',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({per_page: 5})
    //     };
    //     fetch('https://reqres.in/api/products', requestOptions)
    //         .then ((response) => response.json())
    //         .then ((responseBody) => console.log(responseBody))
    // }, [])

    useEffect(() => {
        fetch('https://reqres.in/api/products/?page=2&per_page=5',
        )
            .then ((response) => response.json())
            .then ((responseBody) => console.log(responseBody))
    }, [])



  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler}/> //przekazuję pointer do funkcji jako props
      <TodoList
          items={todos}
          onDeleteTodo = {todoDeleteHandler}/>
    </div>
  );
};

export default App;
