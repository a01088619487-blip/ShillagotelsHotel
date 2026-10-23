// 스와이퍼
const swiper = new Swiper(".visual-inner", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// lang박스
const langMenu = document.querySelector(".lang-menu");
const langBtn = document.querySelector(".lang-btn");
// console.log(langMenu);
// console.log(langBtn);
if (langMenu && langBtn) {
  //만약에 한국어 버튼을 클릭했을때
  langBtn.addEventListener("click", (e) => {
    // langbtn클릭이벤트를 발생햇을때
    e.preventDefault();
    langMenu.classList.toggle("active");
  });
  // 바탕화면(문서 전체) 아무 곳이나 클릭했을 때 다국어 상자 닫기
  document.addEventListener("click", (e) => {
    // 클릭한 곳이 다국어 메뉴(.lang-menu) 내부가 아니라면
    if (!langMenu.contains(e.target)) {
      langMenu.classList.remove("active");
    }
  });
}

const gotopBtn = document.querySelector("#goTop");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 400) {
    gotopBtn.classList.add("active");
  } else {
    gotopBtn.classList.remove("active");
  }
});
// gotop버튼 클릭시 위로가기 함수
gotopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
