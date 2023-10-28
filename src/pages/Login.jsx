//Main 페이지
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import '../index.css';
import {FcGoogle} from 'react-icons/fc';
import {PiNotepad} from 'react-icons/pi';
import {auth, db} from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup,  signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import TodoMain from './TodoMain';

export default function Login() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const [nameError, setNameError] = useState('');
    const [showEmailError, setShowEmailError] = useState(false); // 초기값을 false로 설정
    const [showPwdError, setShowPwdError] = useState(false);

    const handleNameChange = (e) => {
        const inputName = e.target.value;
        setName(inputName);
        setNameError(inputName.length < 2 ? '이름은 2자 이상이어야 합니다.' : '');
    };

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

    const handleLogin = async () => {
        if (!name || !email || !pwd) {
            alert("이름, 이메일 주소, 비밀번호는 필수 항목입니다.");
            return;
        }
        console.log('Name:', name);
        navigate("/todomain", { state: { user: { name: name } } });
    };
    
    // const handleLogin = async () => {
    //     if (!name || !email || !pwd) {
    //         alert("이름, 이메일 주소, 비밀번호는 필수 항목입니다.");
    //         return;
    //     } else {
    //         navigate("/todomain", { state: { user: user } });
    //     }
    
    
        // try {
        //     const userCredential = await signInWithEmailAndPassword(auth, email, pwd);
        //     const user = userCredential.user;
    
        //     // Firestore에서 사용자 정보 가져오기
        //     const userDocRef = doc(db, 'users', user.uid);
        //     const userDoc = await getDoc(userDocRef);
    
            // if (user && userDoc.exists()) {
            //     setUserData(user);
            //     navigate("/todomain", { state: { user: user } });
            // } else {
            //     console.error("가입된 회원이 아닙니다.");
            //     alert("가입된 회원이 아닙니다.");
            // }
        // } catch (error) {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
    
        //     if (errorCode === 'auth/user-not-found') {
        //         // 사용자가 인증 데이터베이스에 등록되지 않은 경우
        //         // alert("가입된 회원이 아닙니다.");
        //         console.error('Login error:', errorCode, errorMessage);
        //     } else {
        //         console.error('Login error:', errorCode, errorMessage);
        //         alert("가입된 회원이 아닙니다.");
        //     }
        // }
    //};
    
    
    
    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
            .then((data) => {
                // setUserData(data.user); // user data 설정
                // console.log(data.user); // console로 들어온 데이터 표시
                // navigate("/todomain", { state: { user: data.user } });
                const user = data.user;
                setUserData(user);
                console.log(user);
                navigate("/todomain", {state: {user: {name: user.displayName}}});
            })
            // .then((data) => {
            //     navigate({ state: { user: data.user }}, "/todomain");  //성공적인 로그인 후 todomain 페이지로 이동
            // })
            .catch((err) => {
                console.log(err);
            });
        }
    

    return (
        <div className="page">
            <div className='title'>
                일상을 관리하다 Todo-List
                <PiNotepad className='note'/><br/>
            </div>

            <div className='content'>
                <div className='inputWrap'>
                    <input 
                    className='input'
                    placeholder='이름 입력'
                    value={name}
                    onChange={handleNameChange}
                    />
                </div>
                {nameError && (
                    <div className='errorMessage'>
                        {nameError}
                    </div>
                )}
                <div className='inputWrap'>
                    <input 
                    className='input'
                    placeholder='이메일 주소 입력'
                    value={email}
                    onChange={handleEmailChange}    //이메일 변경 시 핸들러 호출
                    />
                </div>
                {showEmailError && (
                    <div className='errorMessage'>
                        올바른 이메일을 입력하세요.
                    </div>
                )}

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
                    {/* <button onClick={()=>{navigate("/kakao")}} className='kakao'>
                    <RiKakaoTalkFill className='detail'/>
                    </button>
                    <button onClick={()=>{navigate("/naver")}} className='naver'>
                    <SiNaver className='naverdetail' />
                    </button> */}
                    <button onClick={handleGoogleLogin} className='google'>
                    <FcGoogle className='detail'/>
                    </button>
                    {userData && <TodoMain user={userData} />}
                </div>
                </div>
        </div>
    )
}