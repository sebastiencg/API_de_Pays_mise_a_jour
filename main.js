let pays = document.querySelector('.pays')
let rechercheTous = document.querySelector('.rechercheTous')
let recherche = document.querySelector('.recherche')
let afficher = document.querySelector('.afficher ')

rechercheTous.addEventListener('click',()=>{
    recupererTousPays()
})
recherche.addEventListener('click',()=>{
    let recuperation= pays.value
    recupererPays(recuperation)
})

function recupererTousPays(){

    fetch('https://restcountries.com/v3.1/all')
        .then((voirPays)=>(voirPays.json()))
        .then(voirPaysDeserialises=>{
            voirPaysDeserialises.forEach(element=>{
                afficherTousPays(element)
            })

        })
}
function afficherTousPays(element){
    template = `
    <p> ${element.name.official}</p>
    `
    afficher.innerHTML += template
}
function recupererPays(reccuperation){
    let url
    url= `https://restcountries.com/v3.1/name/${reccuperation}`
        fetch(url)
            .then((element)=>(element.json()))
            .then((elementDeserialise)=>{
                let nouveauElementDeserialise = elementDeserialise[0]
                afficherPays(nouveauElementDeserialise)
            })
}
function afficherPays(nouveauElementDeserialise){
    template = `
    <p>${nouveauElementDeserialise.name.official}</p>
       `
    afficher.innerHTML=template;
}