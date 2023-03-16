import React from 'react';

import { arasicak_aciklama, arasicak_baslik, arasicak_resim,arasicak_fiyat } from './Urunler';
import Detay from './Detay';

const Arasicak = () =>{

    return(

        <>

        <div class =" mt-5 container d-flex gap-5 flex-column flex-sm-row justify-content-center" style={{marginLeft:"50px" }}>
        {arasicak_baslik.map((arasicak, index)=>(
    


    <div class="col-4" key={index}>
        <Detay  baslik={arasicak} aciklama={arasicak_aciklama[index]} fiyat ={arasicak_fiyat[index]} resim={arasicak_resim[index]} />
    
    </div>
    
    
    
    ))}

        </div>




        </>

    );
}

export default Arasicak;