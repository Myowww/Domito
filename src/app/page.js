import './globals.css';
import Image from "next/image"
import hanni from "../public/image.png";

export default function Home() {
  return (
    <div className="flex flex-col items-left min-h-screen px-80 py-10">

      {/* 헤더 */}
      <div className="flex justify-between items-end mb-8 w-full h-fit"> 
        <h1 className="text-2xl font-bold text-blue-500 mr-4">DOMITY</h1>
        <div className='text-black'><span className='text-blue-500 font-bold'>팜하니</span> 님 반가워요!</div>
      </div>

      {/* 사용자 정보 및 랭킹 카드 배치 */}
      <div className="flex gap-4 mb-8 max-w-4xl">
        <div className='w-3/5'>
          <h3 className="text-black mb-4 font-bold text-2xl">안녕하세요 팜하니 님!<br />오늘도 <span className='font-black text-blue-500'>DOMITY</span>와 함께해요 🍀</h3>

          {/* 사용자 정보 카드 */}
          <div className="bg-blue-500 bg-opacity-0 px-8 py-6 rounded-lg shadow-md h-fit">
            <div className="flex items-center mb-4">

              <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden relative">
                <Image src={hanni} alt='hanni' layout="fill" objectFit="cover" /> 
              </div>

              <div className="ml-8">
                <h2 className="text-xl font-semibold text-black">팜하니</h2>
                <p className="text-black">소프트웨어개발과 2학년 1반 17번</p>
                <p className="text-black">상점: 162 점 / 벌점: 3 점</p>
                <p className="text-black">잔여 포인트: 2000 점</p>
              </div>
            </div>
          </div>

        </div>
        

        {/* 랭킹 카드 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-2/5">
          <h3 className="text-lg font-semibold mb-4">오늘의 랭킹은? 🏆</h3>
          <ol className="flex justify-between flex-col list-decimal list-inside">
            <li className='font-semibold text-lg'>모다니</li>
            <li className='font-semibold text-lg'>김민지</li>
            <li className='font-semibold text-lg'>팜하니</li>
            <li className='font-semibold text-lg'>강해린</li>
            <li className='font-semibold text-lg'>이혜인</li>
          </ol>
        </div>
      
      </div>

      {/* 포인트 혜택 신청 */}
      <h3 className="text-black mb-4 font-bold text-2xl">포인트를 모아서 혜택을 신청해보세요! ✨</h3>
      <div className="flex gap-4 mb-8 w-full h-fit">
        <div className="border-4 border-blue-500 rounded-lg px-8 py-4 w-1/3 h-fit">
          <p className='font-semibold text-xl'>기상송 신청하기 😎</p>
          <p className='text-blue-500 text-lg'>100 point</p>
        </div>

        <div className="border-4 border-blue-500 rounded-lg px-8 py-4 w-1/3 h-fit">
          <p className='font-semibold text-xl'>청소 면제권 😆</p>
          <p className='text-blue-500 text-lg'>50 point</p>
        </div>

        <div className="border-4 border-blue-500 rounded-lg px-8 py-4 w-1/3 h-fit">
          <p className='font-semibold text-xl'>간식 받기 😋</p>
          <p className='text-blue-500 text-lg'>20 point</p>
        </div>
      </div>

      {/* 문의 버튼 */}

      <div className='flex justify-between items-end w-full'>
        <p className='text-gray-300'>2108 이예흔 - 2024 웹프로그래밍 수행평가</p>
        <div className="bg-blue-500 rounded-lg text-white px-8 font-semibold py-4 w-fit h-fit">
          사감선생님에게 문의하기 🔍</div>
      </div>
    </div>
  );
}
