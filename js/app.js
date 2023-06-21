let sections =document.getElementsByTagName("section");


 for(let i=0; i<sections.length;i++){
  let List =document.getElementById('navbar__list')
  let li =document.createElement('li');
  let link = document.createElement('a');
  let att = document.createAttribute("data-id");
  let sectionId = sections[i].getAttribute('id');
  att.value = sectionId; 
  link.setAttributeNode(att)
  link.innerHTML=sectionId
  li.appendChild(link)
  // li.innerHTML =sectionId;

List.append(li)


 }


 function isInViewport (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


function setActiveClass(){
  for (let i=0; i < sections.length; i++){
      if (isInViewport(sections[i])){
          sections[i].classList.add("your-active-class");
      }else{
          section[i].classList.remove("your-active-class");
      }
  }
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




const links = document.querySelectorAll('section');
  function changeLinkState() {
    let index = links.length;

    while(--index && window.scrollY + 50 < links[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
  }

changeLinkState();
window.addEventListener('scroll', changeLinkState);


const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}