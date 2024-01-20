import "./ProductPopup.css"
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


export default function ProductPopup({popupDisplay,imgURL = "https://images.unsplash.com/photo-1638456266087-09b1d160748b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , title = "Heelllo", description = "lasdfiikgohizqmoi;hsaif  sfsadkf dfahsdf afh asdjhfqzko;a  fdhsaf jasdhfh  asajsdhfk fash dfk hasdfkjhasdf sf  sadfhkjsahdfjkshadfjkhaflgqwirfawsbfliuaehgwmhz; fasdfghgaiuwfhq4mnop2z2olnmyp2hzomp2;h4plmy;molpz2yno;z2;6lyonqrhzoilhaesgiusdehnghjkhgseifnao[ suegik sfvnbs s iuse giseh gjkusehv jksehg ikluzomnp;2zomnp;zlo;pmn;ozlp26m;noseilu neksg ljksebfgkljesbgfklsegh dgilh fggaehj g asueg h seiughaseihgeisujghjesghkjhegv'ioahgohawoja oje afvbkachbvkjbahfbvjah sbvabjkhbfvjk ashbvkhjfv hf vhabfkvh vn vjhbdjvbsdjkvba vbdvbadbvj avadbvbdajv vbdavbja vaf kjnavnfakjsdfajkndskjv asv aknvkjna vanjnvakj vadfnvkja dvakdjnvkajdnfkv fvkav af vkj vkavlanvnlzfvnalkvb bsv kladfkv fvajlhbvka vlabv avbaldivadnvk bsvblkadfvan vablv avfalbva vvf avaibvavnkadv "}) {
  return (
      <div className="product-popup">
        <div className="black-overlay" onClick={() => {popupDisplay("none","")}}></div>
        <div className="product-popup-container">
          <div className="product-popup-image">
            <img src={imgURL}></img>
          </div>
          <div className="product-popup-details">
            <div className="cross-button" onClick={() => {popupDisplay("none","")}}>
              <CloseRoundedIcon fontSize="medium" style={{color:"black"}}/>
            </div>
            <div className="product-popup-text">
              <div className="product-popup-title">
                {title}
              </div>
              <div className="product-popup-description">
                {description}
              </div>
              <div className="price">
                4500
              </div>              
            </div>
            <div className="product-buttons">
                <div className="add-to-cart">ADD TO CART</div>
                <div className="buy-now">BUY NOW</div>
            </div>
          </div>
        </div>
    </div>    
  )
}
