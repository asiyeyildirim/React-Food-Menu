import React from 'react';

import { corba_aciklama, corba_baslik, corba_resim,corba_fiyat } from './Urunler';
import Detay from './Detay';

const Corba = () =>{

   
    return(

        <>

        <div className=" mt-5 container d-flex gap-5 flex-column flex-sm-row justify-content-center" style={{marginLeft:"50px" }}>
        {corba_baslik.map((corba, index)=>(
    


    <div className="col-4" key={index}>
        <Detay  baslik={corba} aciklama={corba_aciklama[index]} fiyat ={corba_fiyat[index]} resim={corba_resim[index]} />
    
    </div>
    
    
    
    ))}

        </div>




        </>

    );
}

export default Corba;