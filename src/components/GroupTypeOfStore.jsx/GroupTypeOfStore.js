import { useState } from "react";
import store_banne from "./banne.jpeg";
import store_bras_droits from "./bras-droits.jpeg";
import store_double_pente from "./doubl-pente.jpeg";
import store_desc_vert from "./desc-verticale.jpeg";

export default function GroupTypeOfStore({ name, radios }) {
  const [dimension, setDimension] = useState(false);
  const [selectOption, setSelectOption] = useState("");

  const handleRadioClick = (selectedOption) => {
    setDimension(true);
    setSelectOption(selectedOption);
  };
  return (
    <div>
      <div className="group">
        <h1>{name}</h1>
        {radios.map((element) => {
          return (
            <div className="container-radio-img">
              <input
                type={element.input.type}
                name={element.input.name}
                id={element.input.id}
                onClick={() => handleRadioClick("store_banne")}
              />
              <div className="radio-img">
                <label htmlFor={element.label.htmlFor}>
                  <img alt={element.img.alt} src={element.img.src} />
                  {element.label.text}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
{
  /* {this.setDimension ? (
      <div className="group">
          <h1>Dimensions</h1>
          <div className="briefing">
              <p>Indiquez ci-dessous les dimensions de votre toile de store hors tout. D'une extrémité à l'autre, coutures comprises.</p> 
              <br />
              <p>Pour savoir comment prendre ces mesures <a href="#">cliquez-ici</a>.</p>
          </div>

          {(setSelectOption === 'store_banne' || setSelectOption === 'store_bras_droits') && 
              <Group1 />
          }

          {setSelectOption === 'store_double_pente' && 
              <Group2 />
          }

          {setSelectOption === 'store_desc_verticale' && 
              <Group3 />        
          }
      </div>
  ) : null} */
}

// function Group1(props) {
//     return (
//         <div className="container-input-dimension">
//             <label htmlFor="width">
//                 Largeur
//                 <div className="content-input">
//                     <input name="width"/>
//                     <span>cm</span>
//                 </div>
//             </label>
//             <label htmlFor="projection">
//                 Projection
//                 <div className="content-input">
//                     <input name="projection"/>
//                     <span>cm</span>
//                 </div>
//             </label>
//         </div>
//     )
// }

// function Group2(props) {
//     return (
//         <div className="container-input-dimension">
//             <label htmlFor="width">
//                 Largeur
//                 <div className="content-input">
//                     <input name="width"/>
//                     <span>cm</span>
//                 </div>
//             </label>
//             <label htmlFor="projection">
//                 Projection
//                 <div className="content-input">
//                     <input name="projection"/>
//                     <span>cm</span>
//                 </div>
//             </label>
//             <label htmlFor="projection-opp">
//                 Projection opposée
//                 <div className="content-input">
//                     <input name="projection-opp"/>
//                     <span>cm</span>
//                 </div>
//             </label>
//         </div>
//     )
// }

// function Group3(props) {
//     return (
//         <div className="container-input-dimension">
//             <label htmlFor="width">
//                 Largeur
//                 <div className="content-input">
//                     <input name="width"/>
//                     <span>cm</span>
//                 </div>
//             </label>
//             <label htmlFor="height">
//                 Hauteur
//                 <div className="content-input">
//                     <input name="height"/>
//                     <span>cm</span>
//                 </div>
//             </label>
//         </div>
//     )
// }
