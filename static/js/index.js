function main () {
  $('ul').click(function (ev) {

    if (ev.target.nodeName == 'IMG') {
      let starttext = $(ev.target).next().text();
      $.ajax({
        type: 'GET',
        url: 'http://web.juhe.cn:8080/constellation/getAll',
        data: 'consName=' + starttext + '&type=today&key=003e5a9a6410ed1fe85dd37b1e357a8d',
        dataType: 'jsonp',
        headers: {
          Accept: "application/json; charset=utf-8"
        },
        jsonpCallback: "method",
        success: function (msg) {
          console.log(msg, '跨域成功')
        },
        error: function (err) {
          console.log(err, '跨域失败')
        }
      })
    }
  })
}
main()