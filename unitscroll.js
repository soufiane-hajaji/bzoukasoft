(function () {
  let adLoaded = false;

  function loadAdScript() {
    if (adLoaded) return;
    adLoaded = true;

    const atOptionsScript = document.createElement('script');
    atOptionsScript.innerHTML = `
      atOptions = {
        'key' : '5b7d64d850f564af096f9f77bda57aa6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
    document.body.appendChild(atOptionsScript);

    const adScript = document.createElement('script');
    adScript.src = "//www.highperformanceformat.com/5b7d64d850f564af096f9f77bda57aa6/invoke.js";
    document.body.appendChild(adScript);
  }

  window.addEventListener('scroll', loadAdScript, { once: true });
})();
