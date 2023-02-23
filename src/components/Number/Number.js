import "./Number.scss";

export default function Number({ id, label }) {
  return (
    <div className="label-input">
      <label htmlFor={id}>{label}</label>

      <div className="content-input">
        <input className="input-number" name={id} />
        <span>cm</span>
      </div>
    </div>
  );
}
