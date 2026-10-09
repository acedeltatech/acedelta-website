(function(){
  "use strict";
  var html = document.documentElement;
  html.classList.add('js');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- language switch ---- */
  var META = {
    en:{title:'About Us | A.C.E DELTA 久維科技有限公司 — Advanced Materials & Thermal Science',lang:'en'},
    zh:{title:'關於我們 | A.C.E DELTA 久維科技有限公司 — 先進材料與熱科學',lang:'zh-Hant'}
  };
  function setLang(l, push){
    html.classList.toggle('lang-en', l==='en');
    html.classList.toggle('lang-zh', l==='zh');
    document.querySelectorAll('.lang-sw button').forEach(function(b){
      b.setAttribute('aria-pressed', String(b.dataset.lang===l));
    });
    try{
      document.title = META[l].title;
      html.setAttribute('lang', META[l].lang);
    }catch(e){}
    try{ localStorage.setItem('ace-lang', l); }catch(e){}
    if(window.updateMapLabels) window.updateMapLabels();
    if(push!==false){
      try{
        if(location.protocol.indexOf('http')===0){
          var pg = document.body.dataset.page || 'about';
          ;/* URL sync removed: static hosting */
        }
      }catch(e){}
    }
  }
  document.querySelectorAll('.lang-sw button').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.dataset.lang); });
  });
  (function initLang(){
    var saved = null;
    try{ saved = localStorage.getItem('ace-lang'); }catch(e){}
    try{
      var qs = new URLSearchParams(location.search).get('lang');
      if(qs === 'zh' || qs === 'en') saved = qs;
    }catch(e){}
    var path = location.pathname;
    if(path.indexOf('/zh-tw')===0) saved = 'zh';
    else if(path.indexOf('/en/')===0) saved = 'en';
    if(saved==='zh') setLang('zh', false);
  })();

  /* ---- header scroll + burger ---- */
  var head = document.getElementById('siteHead');
  window.addEventListener('scroll', function(){
    head.classList.toggle('scrolled', window.scrollY > 8);
  }, {passive:true});
  var burger = document.getElementById('burger');
  var nav = document.getElementById('mainNav');
  burger.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function(e){
    if(e.target.closest('a')){ nav.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }
  });

  /* ---- toast ---- */
  var toast = document.getElementById('toast');
  var toastTimer = null;
  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toast.classList.remove('show'); }, 2600);
  }
  var devMsg = function(){
    return html.classList.contains('lang-zh')
      ? '此頁面開發中 — 網址保留於 acedeltatech.com'
      : 'This page is in development — reserved on acedeltatech.com';
  };
  document.querySelectorAll('.dev-link').forEach(function(a){
    a.addEventListener('click', function(e){ e.preventDefault(); showToast(devMsg()); });
  });


  /* ---- reveal: load-time fade (capture/print safe) ---- */
  document.querySelectorAll('.reveal').forEach(function(n){ n.classList.add('in'); });
  })();
