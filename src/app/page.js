export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      {/* 헤더 */}
      <div className="flex flex-row items-center mb-4">
        <h1 className="text-5xl font-bold text-blue-500 mr-4">DOMITY</h1>
        <p className="text-lg text-blue-500">안녕하세요! {`{사용자}`} 님! 오늘도 도미티와 함께해요 🍀</p>
      </div>

      {/* 사용자 정보 및 랭킹 카드 배치 */}
      <div className="flex gap-4 mb-8 w-full max-w-4xl">
        {/* 사용자 정보 카드 */}
        <div className="bg-blue-500 bg-opacity-0 p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-white">사용자</h2>
              <p className="text-white">사용자 정보</p>
              <p className="text-white">사용자 상점 / 벌점</p>
              <p className="text-white">사용자 포인트</p>
            </div>
          </div>
        </div>

        {/* 랭킹 카드 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">오늘의 랭킹은? 🏆</h3>
          <ol className="list-decimal list-inside">
            <li>1. 사용자</li>
            <li>2. 사용자</li>
            <li>3. 사용자</li>
            <li>4. 사용자</li>
          </ol>
        </div>
      </div>

      {/* 포인트 혜택 신청 */}
      <h3 className="text-black font-semibold mb-4">포인트를 모아서 혜택을 신청해보세요! ✨</h3>
      <div className="flex gap-4 mb-8">
        <button className="border border-blue-500 text-blue-500 rounded-lg px-4 py-2">기상송 신청하기 😎 50 point</button>
        <button className="border border-blue-500 text-blue-500 rounded-lg px-4 py-2">청소 면제권 😆 30 point</button>
        <button className="border border-blue-500 text-blue-500 rounded-lg px-4 py-2">간식 받기 😊 20 point</button>
      </div>

      {/* 문의 버튼 */}
      <a href="#" className="text-blue-500 underline">사감선생님에게 문의하기 🔍</a>
    </div>
  );
}
