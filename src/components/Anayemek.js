import React from 'react';
import { anayemek_aciklama, anayemek_baslik, anayemek_resim,anayemek_fiyat } from './Urunler';
import Detay from './Detay';



const Anayemek = () =>{

    return(

        <>
        
<body>

        <div class =" mt-5 container d-flex gap-5 flex-column flex-sm-row justify-content-center" style={{marginLeft:"50px" }}>
        {anayemek_baslik.map((anayemek, index)=>(
    


    <div class="col-4" key={index}>
        <Detay  baslik={anayemek} aciklama={anayemek_aciklama[index]} fiyat ={anayemek_fiyat[index]} resim={anayemek_resim[index]} />
    
    </div>
    
    
    
    ))}

        </div>

        </body>


        </>

    );
}

export default Anayemek;

