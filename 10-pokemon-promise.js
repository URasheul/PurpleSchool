'use strict'

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => {    
    return data.abilities[0].ability.url
  })
  .then(data => fetch(data)) 
  .then(data => data.json())
  .then(info => console.log(info.effect_entries[1].effect))
  .catch(error => console.log(error));