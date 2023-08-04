$(function () {
  // modal 열기
  // .lst-bbs li:first-child를 클릭했을때
  $(".lst-bbs li:first-child").on("click", function () {
    //#modal에 클래스 active를 추가
    $("#modal").addClass("active");
  });



  //modal 닫기
  //#modal button을 클릭했을 때
  $("#modal button").on("click", function() {
    //modal창 삭제
    $("#modal").removeClass("active");
  });

  //tabs
  //.tab-item 옆에 .on 삭제
  $(".tap-item").removeClass("on");
  $(".tab-item:first-child").addClass("on");

  //tab-item .tit 을 클릭했을때
  $(".tab-item .tit").on("click", function() {
    //tab-item에 붙어있는 .on 삭제
    $(".tap-item").removeClass("on");
    //방금 클릭한 나(this)dptj .on 추가
    $(this).parent().addClass("on");

  });
});