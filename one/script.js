
document.getElementById('one').addEventListener('click', getText);

function getText(){
    fetch('sample.txt').then(function(res){
        return res.text();
    }).then(function(data){
        console.log(data);
    })

    // fetch('sample.txt').then((res) => res.text()).then((data) => console.log(data))
    
};

document.getElementById('two').addEventListener('click', getJson)

function getJson(){
    console.log('Still at it menh...')
}

let getIt = function(){
    fetch('samp3.txt').then(function(res){
        return res.text();
    }).then(function(data){
        console.log(data)
    })
}

document.getElementById('three').addEventListener('click', getIt)

document.getElementById('output').addEventListener('click', myOwn)

function myOwn(){
    let output = `
  tpty]u]if]gp[p-uvif[fo    r=vrofirfoipr o -=40of0-rgirg-=4-=04-0rfe[].wqC\]weq]      
    `;
}