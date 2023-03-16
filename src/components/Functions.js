//RENDER FONKSİYONU
import Detay from "./Detay";

import Sidebar  from "./Sidebar";
import React from "react";
import ReactDOM from "react-dom/client";

const goster = (index) => {
  const detay = ReactDOM.createRoot(document.getElementById("detay"));

  detay.render(
    <Detay
      // baslik={baslik[index]}
      // resim={resim[index]}
      // aciklama={aciklama[index]}
      // fiyat={fiyat[index]}
    />
  );

  //EKRANA BASTIRDIĞIMIZ İÇERİK
  return (
    <>
      <div style={{ border: "1px solid black" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          {/* {baslik.map((eleman, index) => (
            <Sidebar menuElemani={eleman} tiklandiginda={() => goster(index)} />
          ))} */}
        </ul>
      </div>
      <div id="detay"></div>
    </>
  );
};

var sonuc = 0;
var dizi = [];

export var sepetEkle = (yemek, fiyat) => {
  document.getElementById("siparisler").innerHTML +=
    "<li class ='nav-item'>" +
    <div className="row"></div> +
    "<div className='col-4'>" +
    "<h1>" +
    yemek +
    "</h1>" +
    "</div>" +
    <div className="row"></div> +
    "<div className='col-12'>" +
    "<p>" +
    fiyat +
    "</p>"+
    "</div>" +
    "</li>"

    sonuc+=parseInt(fiyat);
    document.getElementById("tutar").innerHTML=sonuc;

    dizi.push([yemek,fiyat]);
    sessionStorage.setItem("adisyon",dizi);
};
