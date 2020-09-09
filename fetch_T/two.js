
// document.getElementById('one').addEventListener('click', function(){
//     console.log('Loving thisss');
//     console.log('Thenks God');
//     console.log('At least we makong huge steps to great changes..');
// });

let getText = function(){
    console.log('Haloo halooo, nataka kuongea na Mariko,..')
    console.log('Tafadhali dada io ni wrong number...')
};

document.getElementById('two').addEventListener('click', getText)

let firsttxt = function(){
    fetch('sampletwo.txt').then(function(res){
        return res.text();
    }).then(function(data){
        console.log(data)
    })
};


document.getElementById('one').addEventListener('click', firsttxt)







