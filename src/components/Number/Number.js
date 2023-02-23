import style from "./_number.module.scss";

export default function Number({ id, label }) {
  return (
    <div className={style.container_input}>
      <label htmlFor={id}>{label}</label>

      <div className={style.content_input}>
        <input name={id} />
        <span>cm</span>
      </div>
    </div>
  );
}
