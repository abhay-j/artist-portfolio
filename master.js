var logo = document.querySelector("#logo");
var navitems = document.querySelector(".nav-items");
var headCont =document.querySelector(".page-content h1");
var paraCont =document.querySelector(".page-content p");
var anchorCont=document.querySelector(".page-content a");
var gal = document.querySelector(".gallery");
var helloHead = document.querySelector(".hello h1");
var helloCont = document.querySelector(".hello h2");
var helloBye = document.querySelector(".hello p");
var heloAnch = document.querySelector(".hello .fa");
gsap.fromTo(logo,{opacity:0,x:-30},{opacity:1,x:0,delay:0.25});
gsap.fromTo(navitems,{opacity:0,x:-30},{opacity:1,x:0,delay:0.25});
gsap.fromTo(headCont,{y:30,opacity:0},{y:-30,delay:0.5,opacity:1});
gsap.fromTo(paraCont,{y:30,opacity:0},{y:-30,delay:0.25,opacity:1});
gsap.fromTo(anchorCont,{y:30,opacity:0},{y:-30,delay:0.25,opacity:1});
gsap.fromTo(gal,{y:30,opacity:0},{y:-30,delay:0.5,opacity:1});
gsap.fromTo(helloHead,{y:30,opacity:0},{y:-5,delay:0.25,opacity:1});
gsap.fromTo(helloCont,{y:30,opacity:0},{y:-5,delay:0.25,opacity:1});
gsap.fromTo(helloBye,{y:30,opacity:0},{y:-5,delay:0.25,opacity:1});
gsap.fromTo(helloAnch,{y:30,opacity:0},{y:-5,delay:0.25,opacity:1});
