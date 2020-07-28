var modal = document.querySelector(".modal");
var previews = document.querySelectorAll(".gallery img");
var original = document.querySelector('.full-img img');
const caption = document.querySelector(".modal p")

// gsap.fromTo(previews,{opacity:0,x:-30},{opacity:1,x:0,delay:1.8});

previews.forEach(preview => {
  preview.addEventListener('click', (e) => {
      modal.classList.add("open");
      original.classList.add("open");
      const originalsrc = preview.getAttribute("data-original");
      original.src = originalsrc;
      const altText = preview.alt;
      caption.textContent = altText;

    });
});
modal.addEventListener('click', (e) =>{
  if(e.target.classList.contains('modal')){
    modal.classList.remove("open");
    original.classList.remove("open");
  }
})
