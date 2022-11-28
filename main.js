let pays = document.querySelector('.pays')
let rechercheTous = document.querySelector('.rechercheTous')
let recherche = document.querySelector('.recherche')
let afficher = document.querySelector('.afficher ')
rechercheTous.addEventListener('click',()=>{
    afficher.innerHTML="";
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
            voirPaysDeserialises.forEach( element=>{
                afficherTousPays(element)
            })

        })
}
function afficherTousPays(element){
    template = `
    <p class="templateDePara" style="cursor: pointer">${element.name.common}</p>
    `
    afficher.innerHTML+=template
    let templateDePara= document.querySelectorAll('.templateDePara')
    templateDePara.forEach(paysSelectionner=>{
        paysSelectionner.addEventListener('click',()=>{
            recupererInfoSup(paysSelectionner.textContent)
        })
    })

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
    <p style="cursor: pointer">${nouveauElementDeserialise.name.official}</p>
       `
    afficher.innerHTML=template
    afficher.addEventListener('click',()=>{
       recupererInfoSup(nouveauElementDeserialise.name.common)
    })

}
function recupererInfoSup(infoPays){
    let url=`https://restcountries.com/v3.1/name/${infoPays}`
    fetch(url)
        .then((element)=>(element.json()))
        .then(elementDeserialise=>{
            let nouveauElementDeserialise = elementDeserialise[0]
            afficherInfoSup(nouveauElementDeserialise)
        })
}
function afficherInfoSup(nouveauElementDeserialise){
    afficher.innerHTML=""
    let template = `
                <h3>${nouveauElementDeserialise.name.common}</h3>
                <p>nom officiel : ${nouveauElementDeserialise.name.official}</p>
                <p>capital : ${nouveauElementDeserialise.capital[0]}</p>
                <p>population : ${nouveauElementDeserialise.population} habitants</p>
                <p>superficie : ${nouveauElementDeserialise.area}km2</p>
                <p>continent : ${nouveauElementDeserialise.continents[0]}</p>
                <p> drapeau : <img src="${nouveauElementDeserialise.flags.png}" height="60px" width="80px"></p>
                <p>langage : </p>
                    `
    let values = Object.values(nouveauElementDeserialise.languages)
    let template2
    values.forEach(value=>{template2=`<span> ${ value } </span>`
        template+=template2})


    afficher.innerHTML=template

}
