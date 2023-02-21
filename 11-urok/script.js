const elem = document.getElementById('circle')
function lenght(radius){
    let a = parseInt(radius) * 2 * Math.PI
    let b = parseInt(a) / 2
    return elem.style.width = b;
} 
let p = prompt('Enter the radius of circle');
console.log(lenght(p))