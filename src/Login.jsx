import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css';
import {FcGoogle} from 'react-icons/fc';
import {SiNaver} from 'react-icons/si';
import {RiKakaoTalkFill} from 'react-icons/ri';
import {PiNotepad} from 'react-icons/pi';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const [showEmailError, setShowEmailError] = useState(false); // 초기값을 false로 설정
    const [showPwdError, setShowPwdError] = useState(false);

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        //이메일 유효성 검사
        const emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValid = emailRegex.test(inputEmail);

        //@ 포함 여부에 따라 에러 메시지 표시 여부 설정
        setShowEmailError(!isValid);
    };

    const handlePwdChange = (e) => {
        const inputPwd = e.target.value;
        setPwd(inputPwd);
        const pwdRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isValid = pwdRegex.test(inputPwd);
        setShowPwdError(!isValid);
    };

    const handleLogin = () => {
        if (!email && !pwd) {
            alert("이메일 주소와 비밀번호는 필수 항목입니다.");
        } else if (!pwd) {
            alert("비밀번호는 필수 항목입니다.");
        } else if (!email) {
            alert("이메일 주소는 필수 항목입니다.");
        } else if (showEmailError || showPwdError) {
            alert("올바른 이메일과 비밀번호를 입력하세요.");
        } else {
            navigate("/todomain");
        }
    }

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
                    placeholder='이메일 주소 입력'
                    value={email}
                    onChange={handleEmailChange}    //이메일 변경 시 핸들러 호출
                    />
                </div>
                {/* <div className='errorMessage'>
                    올바른 이메일을 입력하세요.
                </div> */}
                {showEmailError && (
                    <div className='errorMessage'>
                        올바른 이메일을 입력하세요.
                    </div>
                )}

                {/* <div className='inputTitle'>비밀번호</div> */}
                <div className='inputWrap'>
                    <input 
                    className='input'
                    type='password'
                    placeholder='비밀번호 입력'
                    value={pwd}
                    onChange={handlePwdChange}/>
                </div>
                {showPwdError && (
                    <div className='errorMessage'>
                        영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                    </div>
                )}

                <div>
                    <button onClick={handleLogin} className='bottomButton'>
                        로그인
                    </button>        
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