import style from "./_selectImage.module.scss";

export default function SelectImage({
  label,
  options,
  id,
  handleChangeOption,
  formValues,
}) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <ion-icon
          name="information-circle-sharp"
          alt="icon d'information"
        ></ion-icon>
      </label>
      <ul>
        {options.map((option) => (
          <>
            <li className={style.container_select}>
              <input
                type="radio"
                name={id}
                id={option.name}
                value={option.value}
                checked={formValues[id] === option.name}
                onChange={() => handleChangeOption(option)}
              />

              <div className={style.content_select}>
                <label htmlFor={option.name}>
                  <img alt={option.label} src={option.imageUrl} />
                  {option.label}
                </label>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
