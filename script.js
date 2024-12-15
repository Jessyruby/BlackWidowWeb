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

//////////////////////////////////////////////////////////////////////////////////

const slider = document.querySelectorAll('.img_hq')
const buttonL = document.getElementById('buttonL')
const buttonR = document.getElementById('buttonR')

let currentSlider = 0

function hideSlider() {
    slider.forEach ( item => item.classList.remove('on'))
}

function showSlider() {

    const h2 = document.getElementById('describe_hqs').querySelector('h2')
    const p = document.getElementById('describe_hqs').querySelector('p')
    
    slider[currentSlider].classList.add('on')


    h2.classList.remove('showXright');
    p.classList.remove('showXright');

    if (currentSlider == 0) {
        h2.textContent = 'Black Widow: Marvel Adventures Super Heroes'
        p.textContent = 'Na história, a Viúva Negra se une ao Homem de Ferro e ao Thor para enfrentar um novo inimigo. Natasha usa sua inteligência, habilidades de espionagem e combate para resolver a situação, mostrando por que é uma das heroínas mais formidáveis do universo Marvel.'
    }

    if (currentSlider == 1) {
        h2.textContent = 'Marvel Knights: Black Widow'
        p.textContent = 'Natasha Romanoff enfrenta Yelena Belova, uma rival treinada para substituí-la como Viúva Negra, enquanto lida com conspirações e desafios de seu passado como espiã.'
    }

    if (currentSlider == 2) {
        h2.textContent = 'Black Widow: Name of the Rose'
        p.textContent = 'Natasha Romanoff investiga a morte de um aliado enquanto é alvo de uma conspiração que expõe segredos de seu passado. Em meio a traições e perigos, ela luta por justiça e sobrevivência'
    }

    if (currentSlider == 3) {
        h2.textContent = 'Black Widow: Homecoming'
        p.textContent = 'Natasha Romanoff retorna à Rússia após anos afastada para confrontar fantasmas do seu passado. Durante a missão, ela descobre uma conspiração envolvendo a Sala Vermelha, o programa que a transformou na espiã mortal que é hoje. Em busca de respostas e justiça, Natasha enfrenta antigos inimigos, questiona sua lealdade e luta para redimir suas escolhas enquanto desmantela uma perigosa rede de espionagem.'
    }
    if (currentSlider == 4) {
        h2.textContent = 'Black Widow Vol. 8 5'
        p.textContent = ' Natasha Romanoff enfrenta as consequências de uma trama que abalou sua vida. Após descobrir que teve suas memórias manipuladas e uma vida falsa criada para ela, Natasha junta forças com aliados, como Yelena Belova, para desmantelar a organização responsável. A edição mostra Natasha lidando com traições, perda e reconstrução, enquanto reafirma sua força e determinação em superar qualquer adversidade.'
    }
    if (currentSlider == 5) {
        h2.textContent = 'Black Widow Vol. 8 15'
        p.textContent = 'Natasha Romanoff continua sua luta contra a criminalidade em San Francisco enquanto enfrenta os dilemas de seu passado e tenta proteger as pessoas próximas. Nesta edição, ela encara um confronto decisivo contra inimigos que ameaçam destruir tudo o que ela construiu. Com ação intensa e reviravoltas emocionantes, a história explora a determinação de Natasha em enfrentar os desafios como heroína e ex-espiã, equilibrando sua nova vida com os perigos do seu legado.'
    }


}

function buttonLeft() {
    hideSlider()
 
    if(currentSlider === 0) {
        currentSlider = slider.length - 1 
    } else {
        currentSlider--
    }

    showSlider()
  
}

function buttonRight() {
    hideSlider()

    if(currentSlider == slider.length - 1){

        currentSlider = 0

    } else {
        currentSlider++
    }

    showSlider()
}

buttonL.addEventListener('click', buttonLeft)
buttonR.addEventListener('click', buttonRight)