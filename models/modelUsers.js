//qrcodeusers
let qrcode=require('qrcode');

// With async/await
const generate = async text => {
    try {
      const respuesta=await qrcode.toDataURL(text);
      return respuesta;
    } catch (err) {
      return err
    }
  }

module.exports={generate}