export default function Input({ inputs }) {
  return (
    <>
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
    </>
  );
}
