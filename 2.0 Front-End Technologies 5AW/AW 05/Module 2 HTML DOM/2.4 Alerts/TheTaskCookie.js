function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return " ";
}
function fun () {
    setInterval(() => {
    setCookie("num", Math.round(Math.random()*10),30);
        console.log(getCookie("num"));
    },10000);
}
fun();


// https://www.youtube.com/watch?v=qL686urjht0&list=PLZ80tPjjho5WUTXsPYCFaNa1ZWGLLGjJM&index=6&t=14s

// <!--https://noroff.bravais.com/s/dIAqJ70lGfmNVL6cnJMs

//     document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

//     In this lesson, we learnt about pop-ups, timings and cookies. 
//     You must now create a program that will create a cookie and change its value to a random number from 0 to 10 every 10 seconds. -->
