
    (function(){
        const spanEl = document.querySelector("main h2 span");
        const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
        let index = 0;
        let currentTxt = txtArr[index].split("");
        function writeTxt(){
          spanEl.textContent  += currentTxt.shift(); 
          if(currentTxt.length !== 0){ 
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
          }else{
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
          }
        }
        function deleteTxt(){
          currentTxt.pop();
          spanEl.textContent = currentTxt.join("");
          if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
          }else{
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
          }
        }
        writeTxt();
    })();
    

// --------------------------
//  스크롤 이벤트

// 스크롤을 내렸을 때 Y값이 0보다 크면 active값을 붙인다

// 스크롤의 y값을 이용해서 해더백그라운드에 검은색을 줌

const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    const browerScrolly = window.scrollY;
    if(browerScrolly > 0){
        headerEl.classList.add("active");
    } else{
        headerEl.classList.remove("active");
    }
});


// 최적화!!!가 필요함
// 리퀘스트 에니메이션
// requestAnimationFrame() 알아두기 
// 앞에 있는 레이아웃이 다 작업후에 실행하는 코드로 최적화 및 성능개선의 효과가 있음


//   const headerEl = document.querySelector("header");
//   window.addEventListener('scroll', function(){
//     requestAnimationFrame(scrollCheck);
//   });
//   function scrollCheck(){
//     let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
//     if(browerScrollY > 0){
//       headerEl.classList.add("active");
//     }else{
//       headerEl.classList.remove("active");
//     }
//   }




// --------------------------------------
//  현재 내가 있는 위치에 가고자 하는 위치값만 이동해야한다
   /* 애니메이션 스크롤 이동 */
   const animationMove = function(selector){
    // ① selector 매개변로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.scrollY; /*현재 위치값*/
    // ③ 이동할 대상의 위치(y 값)
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY; /*이동할 대상 위치값 */
    // ④ 스크롤 이동
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' }); /*behavior: 'smooth 미끄러지듯 이동하는 옶션*/
  };

 const scollMoveEl = document.querySelectorAll("[data-animation-scoroll='true']"); 
 for(let i = 0; i < scollMoveEl.length; i++){
   scollMoveEl[i].addEventListener('click', function(e){
     const target = this.dataset.target;
     animationMove(target); /* 지금의 타겟 값을  const targetEl = document.querySelector(selector); 여기의 셀렉터에 값으 넣음 */
   });
 }