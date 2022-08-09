
// const menuIt = document.querySelectorAll('.navegacao_pag .lista a');
// menuIt.forEach(item =>{
//     item.addEventListener('click', scroll);
// })

// function scroll(event){
//     event.preventDefaul();
//     const elemento = event.target;
//     const id = elemento.getAttribute('href');
//     const secao = document.querySelector(id).offsetTop;
    

//     window.scroll({
//         top: secao,
//         dehavior: "smooth",
//     });
// }
function  openNav(){
  document.getElementById('myNav').style.width = '100%'
}

function closeNav(){
  document.getElementById('myNav').style.width = '0';
}



