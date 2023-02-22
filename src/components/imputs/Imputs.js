import "./imputs.scss";

export default function Input({ label, id, i }) {
  return (
    <label className="label-input" htmlFor={id}>
      {label}
      <div className="content-input">
        <input className="input-number" name={id} key={i} />
        <span>cm</span>
      </div>
    </label>
  );
}

{
  /* {(selectOption.selectOption === "store_bras_droits" ||
              selectOption.selectOption === "store_banne") &&
              element.groupe_dimension_toile.map((input, i) => {
                return (
                  <label htmlFor={input.label.htmlFor}>
                    {input.label.text}
                    <div className="content-input">
                      <input name={input.input.name} key={i} />
                      <span>cm</span>
                    </div>
                  </label>
                );
              })} */
}

{
  /* {selectOption.selectOption === "store_double_pente" &&
              element.groupe_dimension_double_pente.map((input) => {
                return (
                  <label htmlFor={input.label.htmlFor}>
                    {input.label.text}
                    <div className="content-input">
                      <input name={input.input.name} />
                      <span>cm</span>
                    </div>
                  </label>
                );
              })} */
}

{
  /* {selectOption.selectOption === "store_desc_verticale" &&
              element.groupe_dimension_descente_verticale.map((input) => {
                return (
                  <label htmlFor={input.label.htmlFor}>
                    {input.label.text}
                    <div className="content-input">
                      <input name={input.input.name} />
                      <span>cm</span>
                    </div>
                  </label>
                );
              })} */
}
