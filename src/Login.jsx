import React from 'react'
import './index.css';

export default function Login() {
    return (
        <div className='mainTitle'>
            <h1>Todo List</h1>
        
        <div className="page">
            <div className='title'>
                이메일과 비밀번호를 입력해주세요.<br/>
            </div>

            <div className='content'>
                <div className='inputTitle'>email 주소</div>
                <div className='inputWrap'>
                    <input 
                    className='input'
                    placeholder='test@gmail.com'/>
                </div>
                <div className='errorMessage'>
                    올바른 이메일을 입력하세요.
                </div>

                <div className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input 
                    className='input'
                    type='password'/>
                </div>
                <div className='errorMessage'>
                    영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                </div>

                <div>
                    <button className='bottomButton'>확인</button>        
                </div>

                </div>
                </div>
        </div>
    )
}
