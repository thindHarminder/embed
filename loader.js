function loadScriptsInOrder(scripts) {
  if (scripts.length === 0) {
    return;
  }
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = scripts[0];
  script.addEventListener('load', function() {
    loadScriptsInOrder(scripts.slice(1));
  });
  head.appendChild(script);
}

loadScriptsInOrder(['https://cdn.jsdelivr.net/gh/thindHarminder/embed@501591956dcd84e5665ad72be0b696156dfd3ae6/embed.js']);
