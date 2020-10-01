function outer(){
    console.log(`im the outer function`);
    inner();
}

function inner(){
    console.log(`Im the inner function`)
}

outer ();


var lady={
    name:'Julue',
    haircolor: 'brown',
    gethairColor: function(){
        return this.haircolor;
    }
}