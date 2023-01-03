//progress bar

const progressCircles = document.querySelectorAll('.circle');
const textCircles = document.querySelectorAll('.ratings__item-text');

function circles(one, two, tree, fourth, five){
    const progressFirstCircle = one * 20;
    const progressSecondCircle = two * 20;
    const progressThirdCircle = tree * 20;
    const progressFourthCircle = fourth * 20;
    const progressFiveCircle = five * 20;

    if(one > 4 || two > 4 || tree > 4 || fourth > 4 || five > 4){

    }

    for (let i= 0 ; i < progressCircles.length; i++) {
        progressCircles[0].setAttribute("stroke-dasharray", progressFirstCircle + ' , 100')
        progressCircles[1].setAttribute("stroke-dasharray", progressSecondCircle + ' , 100')
        progressCircles[2].setAttribute("stroke-dasharray", progressThirdCircle + ' , 100')
        progressCircles[3].setAttribute("stroke-dasharray", progressFourthCircle + ' , 100')
        progressCircles[4].setAttribute("stroke-dasharray", progressFiveCircle + ' , 100')
    }

    for (let i= 0 ; i < textCircles.length; i++) {
        textCircles[0].innerHTML = one.toFixed(1);
        textCircles[1].innerHTML = two.toFixed(1);
        textCircles[2].innerHTML = tree.toFixed(1);
        textCircles[3].innerHTML = fourth.toFixed(1);
        textCircles[4].innerHTML =  five.toFixed(1);
    }
}

circles(4.5, 2.0, 3.5, 5.0, 4.0)
