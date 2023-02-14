import { useState } from "react";
export default function Radios({ radios }) {
  return (
    <>
      {radios &&
        radios.map((element, i) => {
          return (
            <div className="select">
              <input
                type={element.input.type}
                name={element.input.name}
                id={element.input.id}
                key={i}
                onClick={console.log(element.input.id)}
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
    </>
  );
}
