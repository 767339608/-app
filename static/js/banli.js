let start = decodeURIComponent(location.search.slice(1))
let index = 0;
let arrcom = ['.today', '.tomorrow', '.week', '.nextweek', '.monthmain', '.month']
let colorall = {
  '红色': "red",
  '绿色': 'green',
  '黑色': 'black',
  '古铜色': "bronze"
}
function createstart (string) {
  num = parseInt(string) / 100;
  let num1 = num * 5;
  console.log(num1)
  let chagenum = 1;
  let img = "";
  if (Math.floor(num1) == num1) {
    chagenum = 0;
  }
  for (let i = 0; i < Math.floor(num1); i++) {
    img += `<img alt src='static/img/星星-拷贝-2.png'>`
  }
  if (chagenum == 0) {
    img += `<img alt src='static/img/星星-拷贝-10.png'>`
    for (let i = 0; i < num - Math.floor(num1) - 1; i++) {
      img += `<img alt src='static/img/星星-拷贝-4.png'>`
    }
  } else {
    for (let i = 0; i < num - Math.floor(num1); i++) {
      img += `<img alt src='static/img/星星-拷贝-4.png'>`
    }
  }
  return img;
}
$.get('http://172.18.1.171:8000/uploadimg/start?consName=' + start + '&type=today&key=003e5a9a6410ed1fe85dd37b1e357a8d', function (today) {
  let todayjson = JSON.parse(today);
  $('.title h2').text(todayjson.name);
  $('.composite-index li:nth-of-type(5)').html('<span>工作指数</span>' + createstart(todayjson.all));
  $('.composite-index li:nth-of-type(6) span:nth-of-type(2)').text(todayjson.QFriend);
  $('.composite-index li:nth-of-type(6) span:nth-of-type(2)').text(todayjson.QFriend);
  $('.composite-index li:nth-of-type(7) span:nth-of-type(2)').text(todayjson.color);
  $('.composite-index li:nth-of-type(7) span:nth-of-type(2)').css({ color: colorall[todayjson.color] });
  $('.composite-index li:nth-of-type(8) span:nth-of-type(2)').text(todayjson.number);
  $('.year-title span').text(today.summary);
  console.log(todayjson)
})
let cut = document.querySelector('.cut');
cut.onclick = function () {
  location.href = '../index.html';
}

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
      $('.constellation').css({ transform: '', transition: "" })
      $(arrcom[indexcom]).css({ display: 'none', float: '' })
    }, 300);
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


