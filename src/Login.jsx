import React from 'react'
import './index.css';
import {FcGoogle} from 'react-icons/fc';
import {SiNaver} from 'react-icons/si';
import {RiKakaoTalkFill} from 'react-icons/ri';

export default function Login() {
    return (
        <div className="page">
            <div className='title'>
                일상을 관리하다 Todo-List<br/>
            </div>

            <div className='content'>
                <div className='inputTitle'>email 주소</div>
                <div className='inputWrap'>
                    <input 
                    className='input'
                    placeholder='test@gmail.com'/>
                </div>
                {/* <div className='errorMessage'>
                    올바른 이메일을 입력하세요.
                </div> */}

                <div className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input 
                    className='input'
                    type='password'/>
                </div>
                {/* <div className='errorMessage'>
                    영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                </div> */}

                <div>
                    <button className='bottomButton'>로그인</button>        
                </div>

                <div className='option'>
                    아이디 찾기 | 비밀번호 찾기 | 회원가입 <br/>
                </div>

                <div className='hr-sen'>SNS 계정으로 로그인</div>

                <div className='social-login'>
                    <button onClick={''} className='kakao'>
                    <RiKakaoTalkFill className='detail'/>
                    </button>
                    <button onClick={''} className='naver'>
                    <SiNaver className='naverdetail' />
                    </button>
                    <button onClick={''} className='google'>
                    <FcGoogle className='detail'/>
                    </button>
                </div>
                </div>
        </div>
    )
}
