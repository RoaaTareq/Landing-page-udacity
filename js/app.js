/* get all section tags*/
let sections =document.getElementsByTagName("section");


 for(let i=0; i<sections.length;i++){
  let List =document.getElementById('navbar__list')
  let li =document.createElement('li');/*create li element*/
  let link = document.createElement('a');/*create a element*/
  let att = document.createAttribute("data-id"); /*create attribute element*/
  let sectionId = sections[i].getAttribute('id');
  att.value = sectionId; 
  link.setAttributeNode(att)
  link.innerHTML=sectionId
  li.appendChild(link) /* append <li><a></li></a>*/
  // li.innerHTML =sectionId;

List.append(li)


 }




function scrollToElement(event){
  if(event.target.nodeName === 'A'){
      const sectionId = event.target.getAttribute('data-id');
      
      const section = document.getElementById(sectionId);

      section.scrollIntoView({behavior: "smooth"});
  }
}
const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(event){
    scrollToElement(event)
})




/*When the section is clicked in navbar, it should be highlighted and should stay highlighted when user clicks outside on webpage*/
let nav=document.getElementById('navbar__list')/*get ul */
let list=document.getElementsByTagName('li')/*get all li tag*/
for (let i = 0; i < list.length; i++) {
  /*for loop li tag**/
  list[i].addEventListener("click", function() {
  var active = document.getElementsByClassName("active");
  if (active.length > 0) { 
    /*check if length > 0 so it active other wise ""*/
    active[0].className = active[0].className.replace(" active", ""); 
  }
  this.className += " active";
  });
}

/* scroll the page the section on navebaer active*/
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");/*get all elemnts*/
  const sections = document.querySelectorAll("section");

  function setActiveLink() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(function(section, index) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(function(link) {
                link.classList.remove("active");/*remove class active when scroll another*/
        });
        navLinks[index].classList.add("active");/*add class active when scroll another*/
      }
    });
  }

  window.addEventListener("scroll", setActiveLink); /*active section*/
});
function removeActiveClass(navLinks) {
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
    }
  }