import React from "react";

import StyleElements from "../../styles/elements.style";

import Button from "../common/button/button";
import Title from "../common/title/title";
import Card from "../common/cards/card";
import StyleHome from "../../styles/Home.style";
import Flying from "../../assets/Flying.png";
import InforMilhas from "../../assets/tesxtInforMilhas.png";
import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Card3 from "../../assets/card3.png";
import Card4 from "../../assets/card4.png";

export default (props) => (
  <section style={StyleHome.body}>
    <div style={StyleHome.container}>       
      <div style={StyleHome.information}>
        <div>
          <img
            src={Flying}
            alt="Italian Trulli"
            width="400"
            height="400"
          />
        </div>
        <div>
          <img
              src={InforMilhas}
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
           <img src={Card1} alt="Alps" style={StyleHome.card1} />
              <div style={StyleHome.containerCardText}> 
                <p>PRÉ-VIAGEM</p>
              </div>
          </div>
          <div style={StyleHome.containerCard4}>
           <img src={Card2} alt="Alps" style={StyleHome.card1} />
              <div style={StyleHome.containerCardText}> 
                <p>ACUMULAR</p>
              </div>
          </div>
          <div style={StyleHome.containerCard4}>
           <img src={Card3} alt="Alps" style={StyleHome.card1} />
              <div style={StyleHome.containerCardText}> 
                <p>RESGATAR</p>
              </div>
          </div>
          <div style={StyleHome.containerCard4}>
           <img src={Card4} alt="Alps" style={StyleHome.card1} />
              <div style={StyleHome.containerCardText}> 
                <p>PÓS-VIAGEM</p>
              </div>
          </div>
        </div>
      </div> 
  </section>
);
