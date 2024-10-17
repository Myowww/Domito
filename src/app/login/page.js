"use client"; // 클라이언트 컴포넌트로 설정

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // useRouter 훅 임포트
import logo from '../../public/logo.png'; // 로고 이미지 경로

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // useRouter 훅 사용

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
    if (username === 'hannipam' && password === '1234') {
      alert('로그인 성공!'); // 로그인 성공 시 알림
      router.push('/'); // 메인 화면으로 이동
    } else {
      alert('잘못된 아이디/비밀번호입니다.'); // 로그인 실패 시 알림
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white w-100%">
        <Image src={logo} alt="DOMITY" width={150} className="mb-4" />
        <p className="text-gray-600 mb-6">로그인 후 도미티의 모든 서비스를 사용해 보세요!</p>

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
          로그인
        </button>
      </form>
      
      <p className="mt-4">
        만약 계정이 없다면? <a href="/signup" className="text-blue-500">회원가입하기</a>
      </p>
    </div>
  );
}
