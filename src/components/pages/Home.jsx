import React from "react";

import StyleElements from "../../styles/elements.style";

import Button from "../common/button/button";
import StyleHome from "../../styles/Home.style";

export default (props) => (
  <section style={StyleHome.body}>
    <div style={StyleHome.container}>       
      <div style={StyleHome.information}>
        <div>
          <img
            src="assets/Flying.png"
            alt="Italian Trulli"
            width="400"
            height="400"
          />
        </div>
        <div>
          <img
               src="assets/tesxtInforMilhas.png"
              alt="Aprenda tudo sobre MILHAS, acumule, compre e ganhe o mundo!"
              width="600"
              height="400"
            />
            <div style={StyleHome.homeBtn}>
              <Button style={StyleHome.button} label="Quero aprender agora" />
              <Button style={StyleHome.button} label="Acessar" />
            </div>
         
        </div>      
      </div>

    </div>
    <div style={props}>
        <div style={StyleHome.containerCard}>
          {/* <h2>Photo Card</h2>*/}

          <div style={StyleHome.containerCard4}>
           <img  src="assets/card1.png" alt="Alps" style={StyleHome.card1} />
              <div style={StyleHome.containerCardText}> 
                <p>PRÉ-VIAGEM</p>
              </div>
          </div>
          <div style={StyleHome.containerCard4}>
           <img  src="assets/card2.png" alt="Alps" style={StyleHome.card1} />
              <div style={StyleHome.containerCardText}> 
                <p>ACUMULAR</p>
              </div>
          </div>
          <div style={StyleHome.containerCard4}>
           <img  src="assets/card3.png" alt="Alps" style={StyleHome.card1} />
              <div style={StyleHome.containerCardText}> 
                <p>RESGATAR</p>
              </div>
          </div>
          <div style={StyleHome.containerCard4}>
           <img  src="assets/card4.png" alt="Alps" style={StyleHome.card1} />
              <div style={StyleHome.containerCardText}> 
                <p>PÓS-VIAGEM</p>
              </div>
          </div>
        </div>
      </div> 
  </section>
);
