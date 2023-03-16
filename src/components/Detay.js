import React from 'react';
import {sepetEkle} from './Functions';



function Detay  (props){

    return(

        <>

        <div className="grid-container mt-3">
        <div className="row">
        <div className="card" style={{ marginLeft:"50px", marginTop:"40px"}}>
      <img src={props.resim} className="card-img-top" style={{width: 300, height: 200, marginTop:"40px" , marginLeft:"12%"}} alt={props.baslik}/>
      <div className="card-body">
        <h5 className="card-title">{props.aciklama}</h5>
        <p className="card-text">{props.fiyat}</p>
        <button className="btn btn-primary" style={{marginLeft:"60px"}} onClick={()=>sepetEkle()}>Sipariş Ver</button>
      </div>
    </div>


        </div>
        

        </div>
      


    
        </>

    );
}

export default Detay;