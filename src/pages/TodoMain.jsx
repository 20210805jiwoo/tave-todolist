import React, { useState } from 'react';
import styled from 'styled-components';
import {MdRecordVoiceOver} from 'react-icons/md';
import {AiOutlineCloseSquare} from 'react-icons/ai';

// 스타일드 컴포넌트 정의
const Container = styled.div`
max-width: 510px;
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
border-radius: 20px;
`;

const FormContainer = styled.form`
display: flex;
align-items: center;
`;

const Button = styled.button`
padding: 8px 16px;
margin-top: -9px;
margin-left: 10px;
background-color: #007bff;
color: #fff;
border: none;
cursor: pointer;
border-radius: 5px;

.voice-icon {
    font-size: 19px;
    vertical-align: middle;
}

&:hover {
    background-color: #0e2d67;
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

const Popup = styled.div`
height: 150px;
width: 300px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 20px;
background-color: #fff;
box-shadow: 0 0 10px rgba(69, 90, 122, 0.2);
z-index: 999;
text-align: right; 
background-color: #d5e4ed;
border-radius: 10px;
`;

const CloseButton = styled.button`
position: absolute;
top: 10px;
right: 10px;
background: none;
border: none;
cursor: pointer;
font-size: 20px;
color: #0e2d67;
`;

const PopupText = styled.p`
position: absolute;
margin-top: 30px; 
font-size: 15px;
`;

function TodoMain({user}) {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    };

    //새로운 할 일 항목 생성, todo 상태에 추가
    const onCreate = (text) => {   //text 변수에 입력한 할 일 포함
        const newTodo = {
        id: new Date().getTime(),   //각 할 일 항목 고유하게 식별
        text,
        done: false,    //새로운 할 일은 완료 x false로 초기화
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);   //todos 배열 복제, newTodo 추가 -> 기존 할 일 목록 변경 않고 새로운 항목 추가
    };

    //todos 상태 업데이트해 done속성 변경
    const onToggle = (id) => {  //할 일 항목 완료/미완료 할 때 호출
        setTodos((prevTodos) => //현재 todos 상태 업데이트
        prevTodos.map((todo) => //이전의 할 일 목록 순회. map 함수: 배열의 각 요소 -> 새로운 배열 변환
            todo.id === id ? { ...todo, done: !todo.done } : todo
        )
        );
    };

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };



    return (
        <Container>
            <div className='name'>
                {user ? `${user.displayName}'s todolist` : 'Todolist'}
            </div>
        <FormContainer onSubmit={onSubmit}>
            <Input
            className="input"
            value={text}
            placeholder="할 일을 입력하세요"
            onChange={onChange}
            />
                <Button type="submit">
                등록
                </Button>
                <Button type='button' onMouseOver={openPopup}>
                    <MdRecordVoiceOver className='voice-icon' />
                </Button>
        </FormContainer>
        <List>
            {todos.map((todo) => (
            <ListItem
                key={todo.id}   
                onClick={() => onToggle(todo.id)}
                done={todo.done}    //완료된 항목에 줄 긋기
            >
                {todo.text} 
            </ListItem>
            ))}
        </List>
        {showPopup && (
            <Popup>
            <CloseButton onClick={closePopup}>
                <AiOutlineCloseSquare />
            </CloseButton>
            <PopupText>
                음성 인식을 통해 할 일을 입력할 수 있습니다.
            </PopupText>
            </Popup>
        )}
        </Container>
    );
    }

    export default TodoMain;