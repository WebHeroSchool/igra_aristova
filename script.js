const openRules=document.querySelector('.button--question ');
const popup=document.querySelector('.rules');
const closeRules=document.querySelector('.button__rules');

openRules.addEventListener('click', function(evt){
    evt.preventDefault();
    popup.classList.add('rules-show');
});

closeRules.addEventListener('click', function(evt){
    evt.preventDefault();
    popup.classList.remove('rules-show');
});