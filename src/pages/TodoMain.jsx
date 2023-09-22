    import React, { useState } from 'react';
    import styled from 'styled-components';

    // 스타일드 컴포넌트 정의
    const Container = styled.div`
    max-width: 450px;
    margin: 0 auto;
    margin-top: 10%;
    padding: 25px;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    `;

    const Input = styled.input`
    width: 70%;
    height: 100%;
    padding: 10px;
    margin-bottom: 10px;
    `;

    const Button = styled.button`
    padding: 8px 20px;
    margin-left: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
    `;

    const List = styled.ul`
    list-style-type: none;
    padding: 0;
    `;

    const ListItem = styled.li`
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
    `;

    function TodoMain() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    };

    const onCreate = (text) => {
        const newTodo = {
        id: new Date().getTime(),
        text,
        done: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const onToggle = (id) => {
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        )
        );
    };

    return (
        <Container>
        <form onSubmit={onSubmit}>
            <Input
            className="input"
            value={text}
            placeholder="할 일을 입력하세요"
            onChange={onChange}
            />
            <Button type="submit">
            등록
            </Button>
        </form>
        <List>
            {todos.map((todo) => (
            <ListItem
                key={todo.id}
                onClick={() => onToggle(todo.id)}
                done={todo.done}
            >
                {todo.text}
            </ListItem>
            ))}
        </List>
        </Container>
    );
    }

    export default TodoMain;
