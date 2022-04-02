const pupper=require('puppeteer');

let main=async ()=>{
    //inicializar navegador
    const browser=await pupper.launch({headless:false});
    //crear una nueva pestana de navegacion
    const page=await browser.newPage();
    //visitamos una direccion o sitio web.
    //await page.goto('https://www.aliatuniversidades.com.mx/aliat/aviso-de-privacidad');
    await page.goto('https://twitter.com/home');
    //realizamos una accion con la info recuperada
    await page.screenshot({path:'example.png'});
    //await page.pdf({ path: 'aviso.pdf', format: 'a4' })

    //cerrar el navegador
    await browser.close();
}

main();