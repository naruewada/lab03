var round = 0;
var end = 0;
let array = ["","","","","","","","",""];

function onClick_x0(){
    if ( end === 1){

        return false;
    }
    blank0.src = "https://www.onlygfx.com/wp-content/uploads/2017/07/x-brush-stroke-1-288x300.png";
    blank0.removeEventListener('click',onClick_x0);
    array[0] = 'x';
    reCheck();
    comRound();
}
function onClick_x1(){


    if ( end === 1){

        return false;
    }
    blank1.src = "https://www.onlygfx.com/wp-content/uploads/2017/07/x-brush-stroke-1-288x300.png";
    blank1.removeEventListener('click',onClick_x1);
    array[1] = 'x';
    reCheck();
    comRound();
}
function onClick_x2(){


    if ( end === 1){

        return false;
    }
    blank2.src = "https://www.onlygfx.com/wp-content/uploads/2017/07/x-brush-stroke-1-288x300.png";
    blank2.removeEventListener('click',onClick_x2);
    array[2] = 'x';
    reCheck();
    comRound();
}
function onClick_x3(){


    if ( end === 1){

        return false;
    }
    blank3.src = "https://www.onlygfx.com/wp-content/uploads/2017/07/x-brush-stroke-1-288x300.png";
    blank3.removeEventListener('click',onClick_x3);
    array[3] = 'x';
    reCheck();
    comRound();
}
function onClick_x4(){


    if ( end === 1){

        return false;
    }
    blank4.src = "https://www.onlygfx.com/wp-content/uploads/2017/07/x-brush-stroke-1-288x300.png";
    blank4.removeEventListener('click',onClick_x4);
    array[4] = 'x';
    reCheck();
    comRound();
}
function onClick_x5(){


    if ( end === 1){

        return false;
    }
    blank5.src = "https://www.onlygfx.com/wp-content/uploads/2017/07/x-brush-stroke-1-288x300.png";
    blank5.removeEventListener('click',onClick_x5);
    array[5] = 'x';
    reCheck();
    comRound();
}
function onClick_x6(){


    if ( end === 1){

        return false;
    }
    blank6.src = "https://www.onlygfx.com/wp-content/uploads/2017/07/x-brush-stroke-1-288x300.png";
    blank6.removeEventListener('click',onClick_x6);
    array[6] = 'x';
    reCheck();
    comRound();
}
function onClick_x7(){


    if ( end === 1){

        return false;
    }
    blank7.src = "https://www.onlygfx.com/wp-content/uploads/2017/07/x-brush-stroke-1-288x300.png";
    blank7.removeEventListener('click',onClick_x7);
    array[7] = 'x';
    reCheck();
    comRound();
}
function onClick_x8(){


    if ( end === 1){

        return false;
    }
    blank8.src = "https://www.onlygfx.com/wp-content/uploads/2017/07/x-brush-stroke-1-288x300.png";
    blank8.removeEventListener('click',onClick_x8);
    array[8] = 'x';
    reCheck();
    comRound();
}

const blank0 = document.getElementById('0');
blank0.addEventListener('click',onClick_x0);
const blank1 = document.getElementById('1');
blank1.addEventListener('click',onClick_x1);
const blank2 = document.getElementById('2');
blank2.addEventListener('click',onClick_x2);
const blank3 = document.getElementById('3');
blank3.addEventListener('click',onClick_x3);
const blank4 = document.getElementById('4');
blank4.addEventListener('click',onClick_x4);
const blank5 = document.getElementById('5');
blank5.addEventListener('click',onClick_x5);
const blank6 = document.getElementById('6');
blank6.addEventListener('click',onClick_x6);
const blank7 = document.getElementById('7');
blank7.addEventListener('click',onClick_x7);
const blank8 = document.getElementById('8');
blank8.addEventListener('click',onClick_x8);

function comRound(){

    var play = 0;
    do{

        play = Math.floor(Math.random()*9);
        if (round === 4){

            return;
        }
    }
    while(array[play] != "")
    round++;
    array[play] = 'o';
    const imgO = document.getElementById(play);
    imgO.src = "https://media.discordapp.net/attachments/753984868475731968/810826254818607144/image0.png?width=540&height=585";
    
    if (play === 0){

        imgO.removeEventListener('click',onClick_x0 );
    }
    else if (play === 1){

        imgO.removeEventListener('click',onClick_x1 );
    }
    else if (play === 2){

        imgO.removeEventListener('click',onClick_x2 );
    }
    else if (play === 3){

        imgO.removeEventListener('click',onClick_x3 );
    }
    else if (play === 4){

        imgO.removeEventListener('click',onClick_x4 );
    }
    else if (play === 5){

        imgO.removeEventListener('click',onClick_x5 );
    }
    else if (play === 6){

        imgO.removeEventListener('click',onClick_x6 );
    }
    else if (play === 7){

        imgO.removeEventListener('click',onClick_x7 );
    }
    else if (play === 8){

        imgO.removeEventListener('click',onClick_x8 );
    }
    reCheck();

}

function reCheck(){

    if(array[0] === 'x' && array[1] === 'x' && array[2] === 'x'){
        document.getElementById('result').innerHTML = 'Player win!!!';
        end =1;

    }
    else if(array[3] === 'x' && array[4] === 'x' && array[5] === 'x'){
        document.getElementById('result').innerHTML = 'Player win!!!';
        end =1;

    }
    else if(array[6] === 'x' && array[7] === 'x' && array[8] === 'x'){
        document.getElementById('result').innerHTML = 'Player win!!!';
        end =1;

    }
    else if(array[0] === 'x' && array[3] === 'x' && array[6] === 'x'){
        document.getElementById('result').innerHTML = 'Player win!!!';
        end =1;

    }
    else if(array[1] === 'x' && array[4] === 'x' && array[7] === 'x'){
        document.getElementById('result').innerHTML = 'Player win!!!';
        end =1;

    }
    else if(array[2] === 'x' && array[5] === 'x' && array[8] === 'x'){
        document.getElementById('result').innerHTML = 'Player win!!!';
        end =1;

    }
    else if(array[0] === 'x' && array[4] === 'x' && array[8] === 'x'){
        document.getElementById('result').innerHTML = 'Player win!!!';
        end =1;

    }
    else if(array[2] === 'x' && array[4] === 'x' && array[6] === 'x'){
        document.getElementById('result').innerHTML = 'Player win!!!';
        end =1;

    }
    
    if(array[0] === 'o' && array[1] === 'o' && array[2] === 'o'){
        document.getElementById('result').innerHTML = 'Computer win!!!';
        end =1;

    }
    else if(array[3] === 'o' && array[4] === 'o' && array[5] === 'o'){
        document.getElementById('result').innerHTML = 'Computer win!!!';
        end =1;

    }
    else if(array[6] === 'o' && array[7] === 'o' && array[8] === 'o'){
        document.getElementById('result').innerHTML = 'Computer win!!!';
        end =1;

    }
    else if(array[0] === 'o' && array[3] === 'o' && array[6] === 'o'){
        document.getElementById('result').innerHTML = 'Computer win!!!';
        end =1;

    }
    else if(array[1] === 'o' && array[4] === 'o' && array[7] === 'o'){
        document.getElementById('result').innerHTML = 'Computer win!!!';
        end =1;

    }
    else if(array[2] === 'o' && array[5] === 'o' && array[8] === 'o'){
        document.getElementById('result').innerHTML = 'Computer win!!!';
        end =1;

    }
    else if(array[0] === 'o' && array[4] === 'o' && array[8] === 'o'){
        document.getElementById('result').innerHTML = 'Computer win!!!';
        end =1;

    }
    else if(array[2] === 'o' && array[4] === 'o' && array[6] === 'o'){
        document.getElementById('result').innerHTML = 'Computer win!!!';
        end =1;

    }
}


