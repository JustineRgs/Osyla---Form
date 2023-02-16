import "./radios.scss";

export default function Radios({ radios, handleRadioClick }) {
  return (
    <>
      {radios &&
        radios.map((element, i) => {
          return (
            <div className="select_img">
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
    </>
  );
}
