$(function () {
  const modalWrap = $("#modal");
  //$("#modal").find("button");
  const modalBtn = modalWrap.find("button");
  const listbbsEl = $(".lst-bbs li:first-child");
  // modal 열기
  // .lst-bbs li:first-child를 클릭했을때
  $(".lst-bbs li:first-child").on("click", function () {
    //#modal에 클래스 active를 추가
    $("#modal").addClass("active");
  });

  //modal 닫기
  //#modal button을 클릭했을 때
  $("#modal button").on("click", function () {
    //modal창 삭제
    $("#modal").removeClass("active");
  });

  //tabs
  const tabEl = $(".tab-item");
  const tabTit = tabEl.find(".tit");
  //.tab-item 옆에 .on 삭제
  $(".tap-item").removeClass("on");
  $(".tab-item:first-child").addClass("on");

  //tab-item .tit 을 클릭했을때
  tabTit.on("click", function () {
    //tab-item에 붙어있는 .on 삭제
    tabEl.removeClass("on");
    //방금 클릭한 나(this)dptj .on 추가
    $(this).parent().addClass("on");
  });

  //slide
  let now = 1;
  const slideEls = $(".lst-slide");
  let height = 100;
  //3초 마다 실행
  //setInterval();
  //1초는 1000
  setInterval(function () {
    slide();
  }, 3000);
  //슬라이드 기능 만들기

  function slide() {
    console.log("dd");

    //조건문
    //now : 0-1번쨰
    //now : 1-2번째
    //now : 2-3번째
    //참: 만약 1, 2번째 슬라이드일 경우
    //거짓 :3번 슬라이드일 경우
    if (now < 3) {
      //참일경우
      //다음슬라이드로 이동
      slideEls.animate({
        top: heigjt * now * -1 + "%",
      });
      //변수 재선언
      now = now + 1;
    } else {
      //거짓일경우
      //첫번째 슬라이드로 이동
      slideEls.animate({
        top: 0,
      });
      now = 1;
    }
  }
});
