function openHamburger(){
    let screen = document.querySelector('.mobile-list');
    if(screen.classList.contains('open')){
        screen.classList.remove('open');
        document.querySelector('.icon').src = './assets/img/menu_white_36dp.svg'

    }else{
        screen.classList.add('open')
        document.querySelector('.icon').src = './assets/img/close_white_36dp.svg'
        
    }
}