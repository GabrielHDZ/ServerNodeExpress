const pupper=require('puppeteer');

let main=async (route)=>{
    //inicializar navegador
    const browser=await pupper.launch({headless:false});
    //crear una nueva pestana de navegacion
    const page=await browser.newPage();
    //visitamos una direccion o sitio web.
    //await page.goto('https://www.aliatuniversidades.com.mx/aliat/aviso-de-privacidad');
    await page.goto(route);
    //realizamos una accion con la info recuperada
    await page.screenshot({path:'example.png'});
    //await page.pdf({ path: 'aviso.pdf', format: 'a4' })
    /* let title=await page.evaluate(()=>{
        //lista de objetos de tipo NodeList
        const nombre=document.querySelectorAll('.ui-search-item__title');
        let title=[];
        nombre.forEach((e,i)=>{title[i+1]=e.innerHTML});
        return title
    })
    console.log(title) */

    //cerrar el navegador
   await browser.close();
}

module.exports={main}