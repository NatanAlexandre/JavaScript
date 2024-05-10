// Code

const btnFoward = document.getElementById('btn--fwd');
const btnBack = document.getElementById('btn--bck');

let listFanta = ['orange', 'grape', 'berry', 'strawberry']
let index = 1;

const fanta_can = () => {
    if (index > 2){
        index = 0;
    } else {
        index += 1;
    }
}

const fanta_can_reversed = () => {
    if (index < 1){
        index = 3;
    } else {
        index -= 1;
    }
}

const can_color = (name) => {
    let can = document.getElementById('fanta--img');
    let ball = document.querySelector('.ball');
    let ball_reverse  = document.querySelector('.ball--reverse');
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');
    let main = document.querySelector('main');

    if (name == 'orange'){
        can.style.backgroundColor = '#eb6d1f';
        ball.style.backgroundColor = '#e9a275'
        ball_reverse.style.backgroundColor = '#e9a275'
        header.style.backgroundColor = '#d2570a'
        footer.style.backgroundColor = '#d2570a'
        main.style.backgroundColor = '#eb6d1f'
        can.style.backgroundImage = 'url(/src/img/fanta-fruit-orange.png)'
    } else if (name == 'grape'){
        can.style.backgroundColor = '#7B479A';
        ball.style.backgroundColor = '#bc7fe2'
        ball_reverse.style.backgroundColor = '#bc7fe2'
        header.style.backgroundColor = '#490e6d'
        footer.style.backgroundColor = '#490e6d'
        main.style.backgroundColor = '#7B479A'
        can.style.backgroundImage = 'url(/src/img/fanta-can-grape.png)'
    } else if (name == 'strawberry') {
        can.style.backgroundColor = '#EC292D';
        ball.style.backgroundColor = '#d85f61'
        ball_reverse.style.backgroundColor = '#d85f61'
        header.style.backgroundColor = '#89080a'
        footer.style.backgroundColor = '#89080a'
        main.style.backgroundColor = '#EC292D'
        can.style.backgroundImage = 'url(/src/img/fanta-can-strawberry.png)'
    } else if (name == 'berry') {
        can.style.backgroundColor = '#0080d4';
        ball.style.backgroundColor = '#789de8'
        ball_reverse.style.backgroundColor = '#789de8'
        header.style.backgroundColor = '#002780'
        footer.style.backgroundColor = '#002780'
        main.style.backgroundColor = '#0080d4'
        can.style.backgroundImage = 'url(/src/img/fanta-fruit-berry.png)'
    }
}

btnFoward.addEventListener('click', () => {
    fanta_can();
    can_color(listFanta[index]);
})

btnBack.addEventListener('click', () => {
    fanta_can_reversed();
    can_color(listFanta[index]);
})