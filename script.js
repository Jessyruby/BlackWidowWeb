const myObeserver = new IntersectionObserver( (entries) => {

    entries.forEach( (entry) => {

        if(entry.isIntersecting) {

            entry.target.classList.add('show')
            entry.target.classList.add('showXright')
            entry.target.classList.add('showXleft')
            entry.target.classList.add('showY')


        } else {
            entry.target.classList.remove('show')
            entry.target.classList.remove('showXright')
            entry.target.classList.remove('showXleft')
            entry.target.classList.remove('showY')
        }
    })

})

const elements = document.querySelectorAll('.hidden')
const elementsXright = document.querySelectorAll('.hiddenXright')
const elementsXleft = document.querySelectorAll('.hiddenXleft')
const elementsY = document.querySelectorAll('.hiddenY')

elements.forEach( (element) => {
    myObeserver.observe(element)
})

elementsXright.forEach( (element) => {
    myObeserver.observe(element)
})

elementsXleft.forEach( (element) => {
    myObeserver.observe(element)
})

elementsY.forEach( (element) => {
    myObeserver.observe(element)
})


/////////////////////////////////////////////////////////////////////

const faseItems = document.querySelectorAll('.icons');
const mainItem = document.querySelector('.img-principal img');
const logos = document.querySelectorAll('.logo');

faseItems.forEach(item => {
    
    item.addEventListener('click', () => {

        mainItem.classList.add('fade-in');

        setTimeout(() => {
 
            const mainSrc = mainItem.src;
            const logoIdItem = item.getAttribute('data-logo'); 
            const logoIdMain = mainItem.getAttribute('data-logo')

            mainItem.src = item.src;

            item.src = mainSrc;
            mainItem.setAttribute('data-logo', logoIdItem)
            item.setAttribute('data-logo', logoIdMain)

            logos.forEach(logo => logo.classList.remove('visible')); 
         
            const activeLogo = document.getElementById(logoIdItem);

            activeLogo.classList.add('visible');
                 
            mainItem.classList.remove('fade-in');
          
        }, 100);   
    });
});
