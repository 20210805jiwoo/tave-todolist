import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css';
import {FcGoogle} from 'react-icons/fc';
import {SiNaver} from 'react-icons/si';
import {RiKakaoTalkFill} from 'react-icons/ri';
import {PiNotepad} from 'react-icons/pi';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="page">
            <div className='title'>
                일상을 관리하다 Todo-List
                <PiNotepad className='note'/><br/>
            </div>

            <div className='content'>
                {/* <div className='inputTitle'>email 주소</div> */}
                <div className='inputWrap'>
                    <input 
                    className='input'
                    placeholder='이메일 주소 입력'/>
                </div>
                {/* <div className='errorMessage'>
                    올바른 이메일을 입력하세요.
                </div> */}

                {/* <div className='inputTitle'>비밀번호</div> */}
                <div className='inputWrap'>
                    <input 
                    className='input'
                    type='password'
                    placeholder='비밀번호 입력'/>
                </div>
                {/* <div className='errorMessage'>
                    영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                </div> */}

                <div>
                    <button className='bottomButton'>로그인</button>        
                </div>

                <div className='option'>
                <button onClick={()=>{navigate("/findid")}} className='accountbutton'>아이디 찾기</button>
                    <p className='accountbutton'>|</p>
                <button onClick={()=>{navigate("/findpwd")}} className='accountbutton'>비밀번호 찾기</button>
                    <p className='accountbutton'>|</p>
                <button onClick={()=>{navigate("/signup")}} className='accountbutton'>회원가입</button>                
                </div>

                <div className='hr-sen'>SNS 계정으로 로그인</div>

                <div className='social-login'>
                    <button onClick={()=>{navigate("/kakao")}} className='kakao'>
                    <RiKakaoTalkFill className='detail'/>
                    </button>
                    <button onClick={()=>{navigate("/naver")}} className='naver'>
                    <SiNaver className='naverdetail' />
                    </button>
                    <button onClick={()=>{navigate("/google")}} className='google'>
                    <FcGoogle className='detail'/>
                    </button>
                </div>
                </div>
        </div>
    )
}
