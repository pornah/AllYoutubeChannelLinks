var list  = document.getElementsByClassName('yt-lockup-title');
console.log(a);
for each(var link in list){
  var content = document.createTextNode('https://www.youtube.com' + link.firstChild.getAttribute('href'));
  var p = document.createElement('p');
  p.appendChild(content);
  var body = document.getElementsByTagName('body');
  body[0].appendChild(p);
}
