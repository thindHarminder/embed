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

loadScriptsInOrder(['https://cdn.jsdelivr.net/gh/thindHarminder/openCodeEditor@85a00c7433cfeb5e561adb16d1aa28e7d1a20f30/codemirror.min.js,
'https://cdn.jsdelivr.net/gh/thindHarminder/openCodeEditor@85a00c7433cfeb5e561adb16d1aa28e7d1a20f30/javascript.min.js', 
'https://cdn.jsdelivr.net/gh/thindHarminder/openCodeEditor@85a00c7433cfeb5e561adb16d1aa28e7d1a20f30/css.min.js',
'https://cdn.jsdelivr.net/gh/thindHarminder/openCodeEditor@85a00c7433cfeb5e561adb16d1aa28e7d1a20f30/xml.min.js',
'https://cdn.jsdelivr.net/gh/thindHarminder/openCodeEditor@85a00c7433cfeb5e561adb16d1aa28e7d1a20f30/htmlmixed.min.js']);
