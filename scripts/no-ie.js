var agent = navigator.userAgent.toLowerCase();
if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
    alert("인터넷 익스플로러는 세종시 온라인 공부방을 지원하지 않아요. 크롬으로 접속해주세요!");
    document.location.href='https://www.google.com/intl/ko/chrome/';
}
    else {
}