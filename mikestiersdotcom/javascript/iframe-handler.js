document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to all links with the class 'iframeLink'
    var links = document.querySelectorAll('.iframeLink');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            var iframe = document.getElementById('myIframe');
            var overlay = document.getElementById('iframeOverlay');

            // Set the iframe source to the link's href attribute
            iframe.src = this.href;
            
            // Show the iframe overlay
            overlay.style.display = 'flex';
        });
    });

    // Attach event listener to the close button
    var closeButton = document.getElementById('closeIframeButton');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            var overlay = document.getElementById('iframeOverlay');
            overlay.style.display = 'none';
        });
    }
});
