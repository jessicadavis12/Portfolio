const express = require('express')
const app = express()
const yelp = require('yelp-fusion')
const { response } = require('express')
const client = yelp.client('6u6XMMSJD334MrPr87CcPdip5S4qcfElno87DEEmUqrFu_HPl93XY1vVKI1HK8165fHLy_XtLkFMaE4HhVoCAB1CtLkLHeutaRPViQ3fqr7CdbPOA_Y6VOlpjug_X3Yx')
const PORT = process.env.PORT || 3000

app.use(express.static('public'));

app.get('/', (req, res)=>{
   //res.send('it worked')
   res.render("home.ejs")
})

app.get('/searchresults', (req, res)=>{
    client.search({
        location: req.query.locale,
        limit: 10
    })
    .then(response =>{
        let results = response.jsonBody.businesses;
        console.log(results)
        //res.render("searchresults.ejs", {results: results, location : req.query.locale });
    })
    .catch((err)=>
   {console.log('catch error:', err)
   res.end()
    })
})

app.listen(PORT, ()=>console.log(`App is listening on port ${PORT}`))