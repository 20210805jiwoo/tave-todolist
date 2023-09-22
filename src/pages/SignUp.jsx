import React from 'react';
import {BsPersonPlusFill} from 'react-icons/bs';


function SignUp() {
    return (
        <div className="page">
            <div className='title'>
                회원가입
                <BsPersonPlusFill className='plus'/>
            </div>

            <div className='content'>
                {/* <div className='inputTitle'>이름</div> */}
                <div className='inputWrap'>
                    <input 
                    className='input'
                    placeholder='이름 입력'
                    />
                </div>

                <div className='inputWrap'>
                    <input 
                    className='input'
                    placeholder='이메일 주소 입력'
                    />
                </div>

                <div className='inputWrap'>
                    <input 
                    className='input'
                    type='password'
                    placeholder='비밀번호 입력'
                    />
                </div>

                <div className='inputWrap'>
                    <input 
                    className='input'
                    type='password'
                    placeholder='비밀번호 확인'
                    />
                </div>


                <div>
                    <button className='bottomButton'>
                        가입하기
                    </button>        
                </div>
                </div>
        </div>
    )
}

export default SignUp;
