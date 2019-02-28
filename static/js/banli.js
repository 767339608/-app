let cut = document.querySelector('.cut');
cut.onclick = function () {
  location.href = '../index.html';
}
let index = 0;
let arrcom = ['.today', '.tomorrow', '.week', '.nextweek', '.monthmain', '.month']
$('.table li').eq(index).children(1).addClass("chagespan");
//点击事件
$('.table li span').click(function () {
  $('.table li').eq(index).children(1).removeClass('chagespan');
  if (index < $(this).parent().index()) {
    //往右移动
    $('.constellation').css({ transform: 'translateX(' + -50 + '%)', transition: "transform 0.4s" })
    setTimeout(function () {
      $(arrcom[indexcom]).css({ display: 'none' })
      $('.constellation').css({ transform: '', transition: "" })
    }, 500);
  } else {
    //往左移动
    $('.constellation').css({ transform: 'translateX(' + -50 + '%)', transition: "" })
    setTimeout(function () {
      $('.constellation').css({ transition: "transform 0.4s", transform: 'translateX(' + 0 + '%)' })
    }, 200)
    setTimeout(function () {
      $(arrcom[indexcom]).css({ display: 'none' })
      $('.constellation').css({ transform: '', transition: "" })
    }, 600)
  }
  $(this).addClass("chagespan");
  indexcom = index;
  index = $(this).parent().index();
  $(arrcom[index]).css({ display: 'block' })
})
// 往左滑动
$('.constellation').on('swipeleft', function () {
  $('.table li').eq(index).children(1).removeClass('chagespan');
  indexcom = index;
  index--;
  if (index < 0) {
    index = 5
    //往右移动
    $('.constellation').css({ transform: 'translateX(' + -50 + '%)', transition: "transform 0.4s" })
    setTimeout(function () {
      $(arrcom[indexcom]).css({ display: 'none' })
      $('.constellation').css({ transform: '', transition: "" })
    }, 400);
  } else {
    //往左移动 
    $(arrcom[indexcom]).css({ float: 'right' });
    $('.constellation').css({ transition: "transform 0.4s", transform: 'translateX(' + -50 + '%)' })
    setTimeout(function () {
      $(arrcom[indexcom]).css({ display: 'none', float: '' })
      $('.constellation').css({ transform: '', transition: "" })
    }, 400);
  }
  $('.table li').eq(index).children(1).addClass("chagespan");
  $(arrcom[index]).css({ display: 'block' })
})
//往右滑动
$('.constellation').on('swiperight', function () {
  $('.table li').eq(index).children(1).removeClass('chagespan');
  indexcom = index;
  console.log(indexcom)
  index++;
  if (index > 5) {
    index = 0
  }
  $('.constellation').css({ transform: 'translateX(' + -50 + '%)', transition: "" })
  setTimeout(function () {
    $('.constellation').css({ transition: "transform 0.4s", transform: 'translateX(' + 0 + '%)' })
  }, 100)
  setTimeout(function () {
    $(arrcom[indexcom]).css({ display: 'none' })
    $('.constellation').css({ transform: '', transition: "" })
  }, 500)
  $('.table li').eq(index).children(1).addClass("chagespan");
  $(arrcom[index]).css({ display: 'block' })

})