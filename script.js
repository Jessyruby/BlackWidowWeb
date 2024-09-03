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


////////////////////////////

const faseItems = document.querySelectorAll('.icons');
const mainItem = document.querySelector('.img-principal img');
const logos = document.querySelectorAll('.logo');

faseItems.forEach(item => {
    
    item.addEventListener('click', () => {
        // Adiciona a classe de fade-in antes de trocar a imagem
        mainItem.classList.add('fade-in');

        // Usa um timeout para permitir que o fade-in ocorra antes da troca da imagem
        setTimeout(() => {
            // Salvar a imagem atual da div principal
            const mainSrc = mainItem.src;
            const logoId = item.getAttribute('data-logo'); // Obtém o ID do logo correspondente

            console.log(logoId)

            // Trocar a imagem da div principal pela imagem clicada
            mainItem.src = item.src;

            // Trocar a imagem clicada pela imagem que estava na div principal
            item.src = mainSrc;

             // Mostrar o logo correspondente
             logos.forEach(logo => logo.classList.remove('visible')); // Esconde todos os logos

             if (logoId) {
                 const activeLogo = document.getElementById(logoId);
                 
                 if (activeLogo) {

                     activeLogo.classList.add('visible'); // Mostra o logo correspondente
                 }
             }

            // Remove o efeito de fade-in após a troca da imagem
            setTimeout(() => {
                mainItem.classList.remove('fade-in');
            }, 50); // O tempo aqui deve ser igual ao da transição do fade-in
        }, 50); // Tempo de espera para garantir que o efeito de fade-in seja visível     
    });
});
