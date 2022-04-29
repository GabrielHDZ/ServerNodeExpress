const secActive=(rep)=>{
    //obtenemos un NodeList del DOM
    const NodeList=document.querySelectorAll('.seccion');
    // Change the text of multiple elements with a loop
    NodeList.forEach(e => {
    e.style.display='none';
    });
    let seccion=rep.hash.slice(1);
    console.log(seccion)
    if(seccion){
        document.getElementById(seccion).style.display='block';
    }
    if(seccion==='database'){
        
    }
}



/* document.querySelector(".cook").addEventListener("click", function(event){
    event.preventDefault()
  });
 */