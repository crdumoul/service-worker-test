var unloaded = null;

self.addEventListener('fetch', function(event) {
  if (unloaded) {
	  var accept = event.request.headers.get('Accept');
	  if (accept && accept.indexOf('text/html') != -1) {
		  console.log('Transition from ' + unloaded + ' to ' + event.request.url);
		  unloaded = null;
	  }
  }
  event.respondWith(fetch(event.request));
});

self.addEventListener('message', function(event) {
  unloaded = event.data;
});