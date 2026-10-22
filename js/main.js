
// 스와이퍼
const swiper = new Swiper('.visual-inner',{
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
// lang박스
const langMenu = document.querySelector('.lang-menu')
const langBtn = document.querySelector('.lang-btn')
// console.log(langMenu);
// console.log(langBtn);
if(langMenu && langBtn){
    //만약에 한국어 버튼을 클릭했을때
    langBtn.addEventListener('click',(e)=>{
        // langbtn클릭이벤트를 발생햇을때
        e.preventDefault();
        langMenu.classList.toggle('active');
    })
  }



