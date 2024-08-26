



    const spanEl = document.querySelector("main h2 span"); // document.querySelector 이걸로 main h2 span을 셀렉해라
    //                         그걸 spanEl에 대입해라
   
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    // 배열로 변경될 글씨를 넣어라
  // txtArr = [ , , ,]

    let index = 0;
    // 출력할 때마다 어떤값인지 알아야하기때문에 
// index  변수를 지정해주고 그건 0으로 함
    let currentTxt = txtArr[index].split("");
// split. 하나하나 나누는 
// Web Publisher 를 "W","e","b" 이렇게 나눠줘라

    function writeTxt(){
      // 출력됐다 없어지는건
      // 메소드가 2개가 필요함 여기선 function writeTxt() 출력 함수와  function deleteTxt() 삭제함수

      spanEl.textContent  += currentTxt.shift(); 
    // currentTxt.shift() : 시프트 함수 >  전체 요소중에 맨 앞에 있는 요소를 없애고  spanEl에 없앤 요소를 붙여라 여기선 "W"
// (파괴적 메소드)
      if(currentTxt.length !== 0){ 
        // currentTxt길이값이 0이 아니라면 setTimeout 해라
        setTimeout(writeTxt, Math.floor(Math.random() * 1000));
        // if문 함수를 실행하되 Math.floor 만큰 참았다가 출력해라 여기선 0.1초
      // 타이핑 효과 를 주기위해서 0.1초동안 랜덤으로 돌린다 
      }else{
        currentTxt = spanEl.textContent.split("");
        // else 실행되면  spanEl이 가지고있는 텍스트 컨테츠 스플릿 한 값을 currentTxt에 대입
        setTimeout(deleteTxt, 3000);
        // deleteTxt,를 3초 있다 실행해라
      }
    }
    function deleteTxt(){
      currentTxt.pop();
      // currentTxt.pop() 이건 맨뒤에 있는 거를 삭제하라는 메소드
      spanEl.textContent = currentTxt.join("");
      // currentTxt.join("") 위에 가지고는 있는 W e b 각각의 배열을 묶어준다 
      if(currentTxt.length !== 0){
        // if문 0이 아니라면 0.1초 랜덤값 이후에 pop 해라 :맨뒤에 있는 문자를 떼고 나머지 합치고 출력을 반복
        setTimeout(deleteTxt, Math.floor(Math.random() * 1000))
      }else{
        index = (index + 1) % txtArr.length;
        // 인덱스에 +1 을 해주고 txtArr.length 만큼 나누고 
        // 나머지값을 
        // index에 저장하면 위의 출력함수를 반복 
        currentTxt = txtArr[index].split("");
        writeTxt();
      }
    }
    writeTxt();
    // 맨밑의 라이트텍스트를 실행줘야하니 마지막에 트리거로서 실행문 (반복실행문 같음)



