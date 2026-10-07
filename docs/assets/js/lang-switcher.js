(function(){
  // Adjust base if your site is served at a repo subpath (site_url already is root here)
  var base = ''; // leave empty for root site; if hosted at /repo-name/ set to '/repo-name'
  var path = location.pathname;
  // Normalize trailing / and strip index.html
  path = path.replace(/index\.html$/, '');
  if(!path.endsWith('/')) path += '/';

  var isJa = path.indexOf('/ja/') === 0 || path === '/ja/';
  // Compute counterpart
  var counterpart = isJa ? path.replace(/^\/ja/, '') : '/ja' + (path === '/' ? '/' : path);
  // Ensure single leading slash
  if(!counterpart.startsWith('/')) counterpart = '/' + counterpart;
  // Hooks
  var aEn = document.getElementById('lang-en');
  var aJa = document.getElementById('lang-ja');
  if(!aEn || !aJa) return;

  // Set hrefs
  aEn.href = isJa ? counterpart : path;
  aJa.href = isJa ? path : counterpart;

  // Mark current
  if(isJa) {
    aJa.setAttribute('aria-current','page');
  } else {
    aEn.setAttribute('aria-current','page');
  }

  // Save preference to localStorage
  aEn.addEventListener('click', function(){ localStorage.setItem('preferredLang','en'); });
  aJa.addEventListener('click', function(){ localStorage.setItem('preferredLang','ja'); });

  // Optional: on root, redirect to preferred language
  if(location.pathname === '/' || location.pathname === '/index.html'){
    var pref = localStorage.getItem('preferredLang');
    if(pref === 'ja' && !isJa){
      location.replace('/ja/');
    }
  }
})();
