export default function Select({ select }) {
  return (
    <>
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
    </>
  );
}
