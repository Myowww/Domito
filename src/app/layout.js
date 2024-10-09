// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="ko"> {/* 언어 설정 */}
      <body>
        {children} {/* 페이지의 내용이 여기에 렌더링됩니다 */}
      </body>
    </html>
  );
}