'use strict'

  const request = new XMLHttpRequest();
  request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
  request.send();

  request.addEventListener('load', function(){
    let data = JSON.parse(this.response);
    
      const abilityRequest = new XMLHttpRequest();
      abilityRequest.open('GET', data.abilities[0].ability.url)
      abilityRequest.send()

      abilityRequest.addEventListener('load', function(){
        let data = JSON.parse(this.response)
        console.log(data.effect_entries[1].effect)
      })
    
  })
 