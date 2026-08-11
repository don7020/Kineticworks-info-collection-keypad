// 최소 서비스 워커.
// Android Chrome이 "홈 화면에 추가"를 완전한 앱(WebAPK, 주소창 없음)으로
// 설치하려면 fetch 핸들러가 있는 서비스 워커가 필요합니다.
// 별도의 오프라인 캐싱 없이, 요청을 그대로 통과시키기만 합니다.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
