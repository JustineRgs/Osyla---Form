import { useState } from "react";
import store_banne from "./banne.jpeg";
import store_bras_droits from "./bras-droits.jpeg";
import store_double_pente from "./doubl-pente.jpeg";
import store_desc_vert from "./desc-verticale.jpeg";

export default function GroupTypeOfStore(){
  const [dimension, setDimension] = useState(false);
  const [selectOption, setSelectOption] = useState("");

  const handleRadioClick = (selectedOption) => {
    setDimension(true);
    setSelectOption(selectedOption);
  };

    return (
    <div>
        <div className="group">
            <h1>Type de store</h1>
            {/* Toile de store banne */}
            <div className="container-radio-img">
                <input
                    type="radio"
                    name="radio"
                    id="store_banne"
                    onClick={() => handleRadioClick("store_banne")}
                />
                <div className="radio-img">
                    <label htmlFor="store_banne">
                        <img alt="Illustration d'une toile de store banne" src={store_banne} />
                        Toile de store banne
                    </label>
                </div>
            </div>
            {/* Toile de bras droits */}
            <div className="container-radio-img">
                <input
                    type="radio"
                    name="radio"
                    id="store_bras_droits"
                    onClick={() => handleRadioClick("store_bras_droits")}
                />
                <div className="radio-img">
                    <label htmlFor="store_bras_droits">
                        <img
                            alt="Illustration d'une toile de store bras droits"
                            src={store_bras_droits}
                        />
                        Toile de store bras droits
                    </label>
                </div>
            </div>
            {/* Toile de store double pente */}
            <div className="container-radio-img">
                <input
                    type="radio"
                    name="radio"
                    id="store_double_pente"
                    onClick={() => handleRadioClick("store_double_pente")}
                />
                <div className="radio-img">
                    <label htmlFor="store_double_pente">
                        <img
                            alt="Illustration d'une toile de store double pente"
                            src={store_double_pente}
                        />
                        Toile de store double pente
                    </label>
                </div>
            </div>
            {/* Toile de store descente verticale */}
            <div className="container-radio-img">
                <input
                    type="radio"
                    name="radio"
                    id="store_desc_verticale"
                    onClick={() => handleRadioClick("store_desc_verticale")}
                />
                <div className="radio-img">
                    <label htmlFor="store_desc_verticale">
                        <img
                            alt="Illustration d'une toile de store bras droits"
                            src={store_desc_vert}
                        />
                        Toile de store descente verticale
                    </label>
                </div>
            </div>
        </div>
        {this.setDimension ? (
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
        ) : null}
    </div>
    )
}

function Group1(props) {
    return (
        <div className="container-input-dimension">
            <label htmlFor="width">
                Largeur 
                <div className="content-input">
                    <input name="width"/>
                    <span>cm</span>
                </div>     
            </label>
            <label htmlFor="projection">
                Projection 
                <div className="content-input">
                    <input name="projection"/>
                    <span>cm</span>
                </div>                           
            </label>
        </div>
    )
}

function Group2(props) {
    return (
        <div className="container-input-dimension">
            <label htmlFor="width">
                Largeur 
                <div className="content-input">
                    <input name="width"/>
                    <span>cm</span>
                </div>     
            </label>
            <label htmlFor="projection">
                Projection 
                <div className="content-input">
                    <input name="projection"/>
                    <span>cm</span>
                </div>                           
            </label>
            <label htmlFor="projection-opp">
                Projection opposée
                <div className="content-input">
                    <input name="projection-opp"/>
                    <span>cm</span>
                </div>                           
            </label>  
        </div>          
    )
}

function Group3(props) {
    return (
        <div className="container-input-dimension">
            <label htmlFor="width">
                Largeur 
                <div className="content-input">
                    <input name="width"/>
                    <span>cm</span>
                </div>
            </label>
            <label htmlFor="height">
                Hauteur 
                <div className="content-input">
                    <input name="height"/>
                    <span>cm</span>
                </div>
            </label> 
        </div>       
    )
}