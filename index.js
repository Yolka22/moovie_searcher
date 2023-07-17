const Display = document.getElementById('display');

document.getElementById('Search').addEventListener('click',(event)=>{

    event.preventDefault();
    fetch(`https://www.omdbapi.com/?t=${document.getElementById('Title').value}&apikey=5ef7d02f`)
    .then(response => response.json())
    .then(data => {
    
        if(data.Title!=undefined){
            Display.innerHTML=
        `
            <p>${data.Title}</p>
        `
        }else{
            Display.innerHTML=
        `
            <p>Movie not found :(</p>
        `
        }
    
  })

})


