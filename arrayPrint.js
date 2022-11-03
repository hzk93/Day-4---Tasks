function arrayPrint(){
    let a = '';
    let arr = ["f1","f2","f3","f4","f5","f6"];
    for(let i = 0; i<arr.length; i++){
        a += arr[i]+" ";       
    }
    document.getElementById('result').innerHTML = a;
}