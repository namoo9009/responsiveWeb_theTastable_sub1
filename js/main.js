const wrap = document.querySelector('#wrap')
const headerWrap = document.querySelector('.header_wrap');
const gnb = document.querySelector('nav.gnb')
const hamBtn = document.querySelector('.ham_box');
const allmenuWrap = document.querySelector('.allmenu_wrap');
const gnbLi = document.querySelectorAll('nav.gnb > ul > li');

// 스크롤을 내리면 글자색이 어두워짐
window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;
    if(scrollY > 0) {
        wrap.classList.add('black');
    } else {
        wrap.classList.remove('black');
    }
});

//햄거버 버튼 클릭시
hamBtn.addEventListener('click',function(e){
    allmenuWrap.classList.toggle('on');
    // gnb, aside글씨 안보이게
    gnb.classList.toggle('on');
    wrap.classList.toggle('hamBtnOn');
}); 

//주메뉴 마우스오버
function mouseoverGnb(){
    gnbLi.forEach(function(el){
        el.addEventListener('mouseover',function(){
            headerWrap.classList.add('on');
        });
        el.addEventListener('mouseout',function(){
            headerWrap.classList.remove('on');
        });
    })
};

mouseoverGnb();