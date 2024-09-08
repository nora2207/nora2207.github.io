<!-- Google tag (gtag.js) -->
(function() {
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-825SZ7J2BF';
  script.async = true;
  document.head.appendChild(script);

  // 確保 Google Analytics 正確初始化
  script.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-123');
  };
})();

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-825SZ7J2BF');
