import React from "react";
import ReactDOM from "react-dom/client";

import domates from "../img/domates.jpg";
import paca from "../img/paca.jpg";
import mercimek from "../img/mercimek.jpg";
import kofte from "../img/kofte.jpg";
import pilav from "../img/pilav.jpg";
import patates from "../img/patates.jpg";
import irmik from "../img/irmik.jpg";
import tarator from "../img/tarator.jpg";
import saksuka from "../img/saksuka.jpg";
import humus from "../img/humus.jpg";
import muhallebi from "../img/muhallebi.jpg";

//export const menu_eleman = ["AnaYemek", "AraSıcak", "Çorba", "Tatlı"];
//ANA YEMEK



export const anayemek_baslik = ["Köfte", "Pilav", "Patates"];

export const anayemek_aciklama = [
  "Köfte, kıymaların yuvarlanarak küçük bir top şeklini almasıyla yapılan bir yemektir.hjhjhj Bazen köfteye, e",

  "Pilav; pirinç, bulgur gibi taneli bitkilerin veya şehriye, kuskus gibi makarna türlerinin sudiy tüketilir.",

  "TPatates, patlıcangiller familyasından yumruları yenen otsu bitki türüdür. Patateljkhkkhkkhks sözcüğü adır.",
];


export const anayemek_fiyat = [30, 45, 70];
export const anayemek_resim = [kofte, pilav, patates];


//ARASICAK


export const arasicak_baslik = ["Tarator", "Şakşuka", "Humus"];

export const arasicak_aciklama = [
  "Havuç ve yoğurt, mayonezli meze",
  "Patlıcan,biber ve soğan ile yapılan bir meze",
  "Nohut ezmesi",
];

export const arasicak_fiyat = [8, 8, 8];
export const arasicak_resim = [tarator, saksuka, humus];



//ÇORBA

export const corba_baslik = ["Domates Çorbası", "Paça", "Mercimek"];

export const corba_aciklama = [
  "Domates çorbası, ana malzemesi domates olan bir çorbadır.krema, tavuk veya sebze suyu, şehriye, köfte içeren tarifler de vardır.",
  "Dilerseniz sarımsaklı sirkeli bir sos hazırlayıp üzerine gezdirebilir, limon miktarını arttırarak servis edebilirsiniz.",
  " Mercimek çorbası, ana malzemesi mercimek olan bir çorbadır; vejetaryen olabilir veya et içerebilir.",
];

export const corba_fiyat = [20, 55, 20];
export const corba_resim = [domates, paca, mercimek];

//TATLI

export const tatli_baslik = ["Muhallebi", "İrmik", "Baklava"];

export const tatli_aciklama = [
  "Sütlü hafif bir tatlı",
  "İtmikle yaoılır, dondurma ile servis edilir",
  "Fıstıklı ve cevizli alternatif mevcut",
];

export const tatli_fiyat = [15, 25, 35];
export const tatli_resim = [muhallebi, irmik, muhallebi];




