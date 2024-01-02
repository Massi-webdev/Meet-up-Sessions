///// function that changes background color based on clicked card /////////
document.querySelector('.card1').addEventListener('click', ()=>{
    document.querySelector('.cards-div1').style.zIndex="5"
    document.querySelector('.cards-div2').style.zIndex="0"
    document.querySelector('.cards-div3').style.zIndex="0"
    document.querySelector('body').style.backgroundColor="rgb(23, 82, 177)";
    
})
document.querySelector('.card2').addEventListener('click', ()=>{
    document.querySelector('body').style.backgroundColor="rgb(136, 42, 186)"
    document.querySelector('.cards-div1').style.zIndex="0"
    document.querySelector('.cards-div2').style.zIndex="5"
    document.querySelector('.cards-div3').style.zIndex="0"
})
document.querySelector('.card3').addEventListener('click', ()=>{
    document.querySelector('body').style.backgroundColor="rgb(86, 34, 190)"
    document.querySelector('.cards-div1').style.zIndex="0"
    document.querySelector('.cards-div2').style.zIndex="0"
    document.querySelector('.cards-div3').style.zIndex="5"
})