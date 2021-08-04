/** The same nav.js file is used for all the menus on the different projects. */

$(document).ready(function() {
    /* notes on jquery
    $(".main").hide();  
    main <main>
    .main class="main"
    #main id="main"
    this current element
    "*" all elements
    "[href]" all elements with an href attribute
     "p.intro" selects p tags with class intro
    "p:first" first p element
    "ul li:first" first li of first ul  
    "ul li:first-child" first li element of every ul
    etc... https://www.w3schools.com/jquery/jquery_selectors.asp
    */

const pathName = location.pathname;

console.log("pathname ", pathName); //pathname[2] is : in local system pathname
    /** * Notes on pathnames
    * I figured not everyone would run this project on a server, local-server or live-server
    * so here is my solution to that.
    * A normal pathname includes C: D: etc, so the code tries to identify the : independently of the memory
    * where the files are located.
    * Then we define the menu paths depending on the type of pathname where the page is running.
    * Also, the menu highlights the option in the menu we are currently at.
    **/
if(pathName[2] == ":"){
    //in case the page is executed from the filesystem
    const localPathName = pathName.slice(1);
    const splitPath = localPathName.split('/');
    
    let finalPath = "";
    for(pat in splitPath){
        if(splitPath[pat] == "index.html" || splitPath[pat] == "projects"){
            break;
        } else {
            finalPath = finalPath + splitPath[pat] + "/";
            console.log('Final path so far',finalPath);
        }
    }
    $("nav").append('<a href="'+finalPath+'index.html">&#127968; Home</a>');
    $("nav").append('<a href="'+finalPath+'projects/faq/faq.html">F.A.Q.</a>');
    $("nav").append('<a href="'+finalPath+'projects/backgroundflipper/hex.html">Background Flipper</a>');
    $("nav").append('<a href="'+finalPath+'projects/counter/counter.html">Counter</a>');
    $("nav").append('<a href="'+finalPath+'projects/navBarHidden/navBar.html">Navigation Bar</a>');
    $("nav").append('<a href="'+finalPath+'projects/modal/modal.html">Modal Example</a>');
    $("nav").append('<a href="'+finalPath+'projects/slideshow/slideshow.html">Slideshow</a>');
    $("nav").append('<a href="'+finalPath+'projects/keyboard/keyboard.html">Keyboard</a>');
    $("nav").append('<a href="#">Link 9</a>');
    $("nav").append('<a href="#">Link 10</a>');
    $("nav").append('<a href="#">Link 11</a>');
    $("nav").append('<a href="#">Link 12</a>');
    $("nav").append('<a href="#">Link 13</a>');
    $("nav").append('<a href="#">Link 14</a>');
    $("nav").append('<a href="#">Link 15</a>');
    $("nav").append('<a href="#">Link 16</a>');
    $("nav").append('<a href="#">Link 17</a>');
    $("nav").append('<a href="#">Link 18</a>');
    $("nav").append('<a href="#">Link 19</a>');
    $("nav").append('<a href="#">Link 20</a>');
    $("nav").append('<a href="#">Link 21</a>');
    $("nav").append('<a href="#">Link 22</a>');
    $("nav").append('<a href="#">Link 23</a>');
    //Next the background-color of the selected option is changed to a light blue
    $('a[href$="'+localPathName+'"]').css('background-color','#8ed8eb');
    if(splitPath[splitPath.length-1] == "simple.html"){
        $('a[href$="'+finalPath+'projects/backgroundflipper/hex.html"]').css('background-color','#8ed8eb');
    }
} else {
    /** This is the default option.
     * this option is used in case the page is running on a server
     * the menu links use a route starting from the root
     * Example: http://127.0.0.1:5500/projects/faq/faq.html for a local server
     * */
    $("nav").append('<a href="/index.html">&#127968; Home</a>');
    $("nav").append('<a href="/projects/faq/faq.html">F.A.Q.</a>');
    $("nav").append('<a href="/projects/backgroundflipper/hex.html">Background Flipper</a>');
    $("nav").append('<a href="/projects/counter/counter.html">Counter</a>');
    $("nav").append('<a href="/projects/navBarHidden/navBar.html">Navigation Bar</a>');
    $("nav").append('<a href="/projects/modal/modal.html">Modal Example</a>');

    $("nav").append('<a href="/projects/slideshow/slideshow.html">Slideshow</a>');
    $("nav").append('<a href="/projects/keyboard/keyboard.html">Keyboard</a>');
    $("nav").append('<a href="#">Link 9</a>');
    $("nav").append('<a href="#">Link 10</a>');
    $("nav").append('<a href="#">Link 11</a>');
    $("nav").append('<a href="#">Link 12</a>');
    $("nav").append('<a href="#">Link 13</a>');
    $("nav").append('<a href="#">Link 14</a>');
    $("nav").append('<a href="#">Link 15</a>');
    $("nav").append('<a href="#">Link 16</a>');
    $("nav").append('<a href="#">Link 17</a>');
    $("nav").append('<a href="#">Link 18</a>');
    $("nav").append('<a href="#">Link 19</a>');
    $("nav").append('<a href="#">Link 20</a>');
    $("nav").append('<a href="#">Link 21</a>');
    $("nav").append('<a href="#">Link 22</a>');
    $("nav").append('<a href="#">Link 23</a>');
    
    $('a[href$="'+pathName+'"]').css('background-color','#8ed8eb');
    if(pathName == "/projects/backgroundflipper/simple.html") {
        $('a[href$="/projects/backgroundflipper/hex.html"]').css('background-color','#8ed8eb');
    }
}


/** $("header").append('');
* Use this code in case you want to add a header element
* Finally we add the elements on the footer    
*/
$("footer").append('<p>Design by Sebastian Miranda</p>');
$("footer").append('<p>based on: </p>'); 
$("footer").append('<a href="https://www.freecodecamp.org/news/javascript-projects-for-beginners/">FreeCodeCamp</a>');
});