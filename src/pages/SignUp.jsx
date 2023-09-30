import React, { useState } from 'react';
import {BsPersonPlusFill} from 'react-icons/bs';
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; 

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        const inputName = e.target.value;
        setName(inputName);
        setNameError(inputName.length < 2 ? '이름은 2자 이상이어야 합니다.' : '');
    };

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setEmailError(emailRegex.test(inputEmail) ? '' : '올바른 이메일 주소를 입력하세요.');
    };

    const handlePwdChange = (e) => {
        const inputPwd = e.target.value;
        setPassword(inputPwd);
        const pwdRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setPasswordError(pwdRegex.test(inputPwd) ? '' : '영문, 숫자, 특수문자를 포함하여 8자 이상 입력하세요.');
    };

    const handlePwdConfirmChange = (e) => {
        const inputPwdConfirm = e.target.value;
        setPasswordConfirm(inputPwdConfirm);
        setPasswordConfirmError(password !== inputPwdConfirm ? '비밀번호가 일치하지 않습니다.' : '');
    };

    const handleSignUp = async() => {
        try {
            if (!name || !email || !password) {
                alert("이름, 이메일 주소, 비밀번호는 필수 항목입니다.");
            }  else if (password !== passwordConfirm) {
                alert('비밀번호가 일치하지 않습니다.');
            } else if (nameError || emailError || passwordError) {
                alert('양식에 맞게 입력하세요.');
            } else {
                // Firebase Auth에 사용자 등록
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Firestore에 사용자 정보 저장
                const userDocRef = doc(db, 'users', user.uid);
                await setDoc(userDocRef, {
                    name: name,
                    email: email,
                });

                console.log('User registered:', user);
                // 여기서 추가적인 작업을 수행할 수 있습니다.
                alert('가입이 완료되었습니다.');
                navigate('/');
            }
        } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Registration error:', errorCode, errorMessage);
        }
    };

    return (
        <div className="page">
            <div className='title'>
                회원가입
                <BsPersonPlusFill className='plus'/>
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
                {nameError && <div className="errorMessage">{nameError}</div>}

                <div className='inputWrap'>
                    <input 
                    className='input'
                    placeholder='이메일 주소 입력'
                    value={email}
                    onChange={handleEmailChange}
                    />
                </div>
                {emailError && <div className="errorMessage">{emailError}</div>}

                <div className='inputWrap'>
                    <input 
                    className='input'
                    type='password'
                    placeholder='비밀번호 입력'
                    value={password}
                    onChange={handlePwdChange}
                    />
                </div>
                {passwordError && <div className="errorMessage">{passwordError}</div>}

                <div className='inputWrap'>
                    <input 
                    className='input'
                    type='password'
                    placeholder='비밀번호 확인'
                    value={passwordConfirm}
                    onChange={handlePwdConfirmChange}
                    />
                </div>
                {passwordConfirmError && <div className="errorMessage">{passwordConfirmError}</div>}

                <div>
                    <button className='bottomButton' onClick={handleSignUp}>
                        가입하기
                    </button>        
                </div>
            </div>
        </div>
    )
}

export default SignUp;
