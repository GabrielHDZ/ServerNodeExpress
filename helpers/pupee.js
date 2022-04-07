const pupper=require('puppeteer');

let main=async ()=>{
    //inicializar navegador
    const browser=await pupper.launch({headless:false});
    //crear una nueva pestana de navegacion
    const page=await browser.newPage();
    //visitamos una direccion o sitio web.
    //await page.goto('https://www.aliatuniversidades.com.mx/aliat/aviso-de-privacidad');
    await page.goto('https://listado.mercadolibre.com.mx/memoria-ram-256mb-ddr-400mhz-cl3-pc3200u-3033-0-a0#D[A:memoria%20ram%20256mb%20ddr%20400mhz%20cl3%20pc3200u%203033%200%20a0,L:undefined]');
    //realizamos una accion con la info recuperada
    //await page.screenshot({path:'example.png'});
    //await page.pdf({ path: 'aviso.pdf', format: 'a4' })
    let title=await page.evaluate(()=>{
        //lista de objetos de tipo NodeList
        const nombre=document.querySelectorAll('.ui-search-item__title');
        let title=[];
        nombre.forEach((e,i)=>{title[i+1]=e.innerHTML});
        return title
    })
    console.log(title)

    //cerrar el navegador
   await browser.close();
}

module.exports={main}