
document.addEventListener('DOMContentLoaded', () => {
  const langMenu = document.querySelector('.lang-menu');
  const langBtn = document.querySelector('.lang-btn');

  if (langMenu && langBtn) {
    // 한국어 버튼을 클릭했을 때
    langBtn.addEventListener('click', (e) => {
      e.preventDefault(); // a 태그 기본 기능(페이지 위로 튕기는 현상) 막기
      langMenu.classList.toggle('is-open'); // 'is-open' 클래스가 없으면 붙이고, 있으면 떼기
    });

    // 화면의 다른 곳을 누르면 언어 메뉴 닫기
    document.addEventListener('click', (e) => {
      if (!langMenu.contains(e.target)) {
        langMenu.classList.remove('is-open');
      }
    });
  }
});