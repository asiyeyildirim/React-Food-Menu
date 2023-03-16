import React from 'react';
import { tatli_aciklama, tatli_baslik, tatli_resim,tatli_fiyat } from './Urunler';
import Detay from './Detay';

const Tatli = () =>{

    return(

        <>

        <div class =" mt-5 container d-flex gap-5 flex-column flex-sm-row justify-content-center" style={{marginLeft:"50px" }}>
        {tatli_baslik.map((tatli, index)=>(
    


    <div class="col-4" key={index}>
        <Detay  baslik={tatli} aciklama={tatli_aciklama[index]} fiyat ={tatli_fiyat[index]} resim={tatli_resim[index]} />
    
    </div>
    
    
    
    ))}

        </div>




        </>

    );
}

export default Tatli;