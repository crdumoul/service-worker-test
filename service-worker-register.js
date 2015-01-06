if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker-test/service-worker.js', {scope: '/'}).then(function(registration) {
    console.log('serviceWorker registered');
    window.sw = registration.active;
    window.addEventListener('beforeunload', function(event) {
      window.sw.postMessage(window.location.href);
    });
  }).catch(function(err) {
	  console.log('serviceWorker registration failed: ' + err);
  });
}
