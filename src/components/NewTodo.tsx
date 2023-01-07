import React, { useRef } from 'react';

interface NewToDoProps  {
    todoAddHandler: (enteredText: string) => void; //definiujemy że w propsie będzie typ funkcja która  nic nie zwraca i ma jeden param string
}

const NewTodo: React.FC<NewToDoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null); //wyjściowa wartość to null, bo na początku nic się nie renderuje, więc ref jeszcze na nic nie wskazuje

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value //dodajemy wykrzynik,
        // żeby TS wiedział, że to jest ok. Bez tego TS nie wie, że conection pomiędzy const textInputRef, początkowo ustawionej na null
        // zostało stworzone.
        props.todoAddHandler(enteredText);
    }
    return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type='text' id='todo-text' ref={textInputRef}/>
        </div>
        <button type='submit'>ADD Todo</button>

    </form>
    );
};

export default NewTodo;