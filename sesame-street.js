document.addEventListener('DOMContentLoaded', function() {
    var cookieHeader = document.getElementById('cookie-header');
    cookieHeader.style.color = '#f7f16d'; 

    
    var cookies = document.querySelectorAll('#cookie-jar .cookie');
    var cookieCount = cookies.length;
    var cookieCountElement = document.getElementById('cookie-count');
    cookieCountElement.textContent = "There are " + cookieCount + " cookie(s) in the cookie jar!";
    cookieCountElement.style.color = '#f7f16d';

    
    setInterval(function() {
        if (cookieCount > 0) {
            var lastCookie = document.querySelector('#cookie-jar .cookie:last-child');
            lastCookie.parentNode.removeChild(lastCookie);
            cookieCount--;
            cookieCountElement.textContent = "There are " + cookieCount + " cookie(s) in the cookie jar!";
        }
    }, 30000);
});