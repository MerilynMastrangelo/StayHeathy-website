const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('ul');
    const navLinks = document.querySelectorAll('ul li');
    const body = document.querySelector('body');
    
    //Toggle Nav
    burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Animate burger
        burger.classList.toggle('toggle');
    });
}

navSlide();