"use client"; // 클라이언트 컴포넌트로 설정

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // useRouter 훅 임포트
import logo from '../../public/logo.png'; // 로고 이미지 경로

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // useRouter 훅 사용

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'hannipam' && password === '1234') {
      alert('회원가입 성공!'); // 회원가입 성공 시 알림
      router.push('/login'); // 메인 화면으로 이동
    } else {
      alert('회원가입 실패'); // 회원가입 실패 시 알림
    }
  };

  const handleLoginRedirect = () => {
    router.push('/login'); // 로그인 페이지로 이동
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <div className="relative w-36 h-12 mb-4">
      <Image 
        src={logo} 
        alt="DOMITY" 
        layout="fill" 
        objectFit="contain" 
      />
    </div>
    <p className="text-gray-600 mb-6 text-center">회원가입 후 도미티의 모든 서비스를 사용해 보세요!</p>

      <form onSubmit={handleLogin} className="flex flex-col w-80 items-center justify-center">
        <input
          type="text"
          placeholder="아이디를 입력해 주세요."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
          style={{ width: '400px' }} // 인라인 스타일로 너비 설정
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
          style={{ width: '400px' }} // 인라인 스타일로 너비 설정
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded" style={{ width: '400px' }}>
          회원가입
        </button>
      </form>
      
      <p className="mt-4">
        이미 계정이 있다면? 
        <button onClick={handleLoginRedirect} className="text-blue-500 underline">
          로그인하기
        </button>
      </p>
    </div>
  );
}
