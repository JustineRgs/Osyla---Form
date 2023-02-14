import { useState } from "react";

export default function Groups({
  name,
  description,
  radios,
  inputs,
  select,
  handleRadioClick,
}) {
  return (
    <div>
      <div className="group">
        <h1>{name}</h1>
        {description && (
          <div className="briefing">
            <p>{description}</p>
          </div>
        )}
        {radios &&
          radios.map((element, i) => {
            return (
              <div className="select">
                <input
                  type={element.input.type}
                  name={element.input.name}
                  id={element.input.id}
                  key={i}
                  onClick={() => handleRadioClick(element.input.id)}
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
        {inputs &&
          inputs.map((element) => {
            return (
              <div className="container-input-dimension">
                {element.groupe_dimension_toile.map((input, i) => {
                  return (
                    <label htmlFor={input.label.htmlFor}>
                      {input.label.text}
                      <div className="content-input">
                        <input name={input.input.name} key={i} />
                        <span>cm</span>
                      </div>
                    </label>
                  );
                })}
                {/* {element.groupe_dimension_double_pente.map((input) => {
                  return (
                    <label htmlFor={input.label.htmlFor}>
                      {input.label.text}
                      <div className="content-input">
                        <input name={input.input.name} />
                        <span>cm</span>
                      </div>
                    </label>
                  );
                })}
                {element.groupe_dimension_descente_verticale.map((input) => {
                  return (
                    <label htmlFor={input.label.htmlFor}>
                      {input.label.text}
                      <div className="content-input">
                        <input name={input.input.name} />
                        <span>cm</span>
                      </div>
                    </label>
                  );
                })} */}
              </div>
            );
          })}
        {select &&
          select.map((element, i) => {
            return (
              <div className="select_list">
                <label htmlFor={element.label.htmlFor}>
                  {element.label.text}
                  <ion-icon
                    name="information-circle-sharp"
                    alt="icon d'information"
                  ></ion-icon>
                </label>
                <select className="select select--Secondary">
                  {element.option.map((option, i) => {
                    return <option value={option.value}>{option.label}</option>;
                  })}
                </select>
              </div>
            );
          })}
      </div>
    </div>
  );
}
