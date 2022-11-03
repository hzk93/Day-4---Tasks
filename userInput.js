function userInput(){
    let startVal = document.getElementById("initialVal");
    let finalVal = document.getElementById("finalVal");
    let startVal1 = parseInt(startVal.value);
    let finalVal1 = parseInt(finalVal.value);
    console.log(startVal1)      
    let buffer = '';
    let arr = ["f1","f2","f3","f4","f5","f6"];
    for(let i = startVal1; i<finalVal1; i++){
        buffer += arr[i]+" "; 
    }
    document.getElementById('result').innerHTML = buffer;
}

function Clear(){
    document.getElementById('result').innerHTML = '';
}