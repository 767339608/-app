function main () {
  $('ul').click(function (ev) {
    if (ev.target.nodeName == 'IMG') {
      // location.href = 'banli.html';
      let starttext = $(ev.target).next().text();
      let today;
      $.get('http://172.18.1.171:8000/uploadimg/start', { consName: starttext, type: 'today', key: '003e5a9a6410ed1fe85dd37b1e357a8d' }, function (today) {
        today = today;
      })
      console.log(today)
      $.get('http://172.18.1.171:8000/uploadimg/start', { consName: starttext, type: 'tomorrow', key: '003e5a9a6410ed1fe85dd37b1e357a8d' })
      $.get('http://172.18.1.171:8000/uploadimg/start', { consName: starttext, type: 'week', key: '003e5a9a6410ed1fe85dd37b1e357a8d' })
      $.get('http://172.18.1.171:8000/uploadimg/start', { consName: starttext, type: 'month', key: '003e5a9a6410ed1fe85dd37b1e357a8d' })
      $.get('http://172.18.1.171:8000/uploadimg/start', { consName: starttext, type: 'year', key: '003e5a9a6410ed1fe85dd37b1e357a8d' })
    }
  })
}
main()