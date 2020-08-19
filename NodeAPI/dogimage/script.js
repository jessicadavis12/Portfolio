let image = document.getElementById('pic')
image.setAttribute("src", "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg")

let btn = document.getElementById('btn')
let url = 'https://dog.ceo/api/breeds/image/random'
btn.addEventListener('click', ()=>{
    console.log('You clicked me')
    fetch(url)
    .then((function(response){
   //     console.log(response)
        if(response.ok){
            return response.json()
        }
    })
    // if everything ok
    //parse json 
    )   
    .then(data=> image.setAttribute("src", data.message))
    
    //do stuff with the parsed json ie res.render 
    
    .catch(function(err){
        console.error(err)
    }
    //handles errors
)})