
const cards = document.querySelectorAll('.card'),
    span = document.querySelector('.score span:first-of-type');
let checker = false,
    clickTime = false,
firstCard , secondCard, score = 0 ;


function flipCard() {
    if (clickTime) return ;
    if ( this === firstCard ) return ;

    this.classList.add('flip');
    if (!checker ) {
        checker = true ;
        firstCard = this ;
    }else {
        checker = !checker ;
        secondCard = this ;
        condition();
    }
}


function condition() {
    if ( firstCard.dataset.name === secondCard.dataset.name ) {
        firstCard.removeEventListener('click', flipCard ) ;
        secondCard.removeEventListener('click', flipCard ) ;
        score++;
        record();
    }else {
      removeClass(firstCard,secondCard);
    }
}




function removeClass(first,second){
   clickTime = true ;
   setTimeout(() => {
    first.classList.remove('flip');
    second.classList.remove('flip');
    clickTime = false ;
    },1000);
}


cards.forEach( e => e.addEventListener('click' , flipCard ));




(function ran() {
    cards.forEach((r) => {
    let random = Math.floor(Math.random() * 12 );
    r.style.order = random });
    })();
     
  

    function record() {
        span.innerHTML = '0' + score ;
    }



    record();