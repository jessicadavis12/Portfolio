let btn = document.getElementById("btn");
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

btn.addEventListener('click', ()=>{
    let country = document.querySelector('input[name="country"]:checked').value;
    fetch(url)
    .then(response => {
        if (!response.ok){
            throw Error(response.statusText);
        }
    return response.json();    
    })
    .then(data =>{
        let rate = data.bpi[country].rate_float.toFixed(2);
        let symbol = data.bpi[country].symbol;
        console.log(country)
        displayPrice.innerHTML = symbol + rate;
        
    })
    .catch(error=>{
       // console.error("there is an issue", console.error());
    });
});
