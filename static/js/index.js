function main () {
  $('ul').click(function (ev) {
    if (ev.target.nodeName == 'IMG') {
      let starttext = $(ev.target).next().text();
      (location.href = 'banli.html?' + starttext);
    }
  })
}
main()
let a = 1;
