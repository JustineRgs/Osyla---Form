import "./textArea.scss";

export default function TextArea({ label, id, i }) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <ion-icon
          name="information-circle-sharp"
          alt="icon d'information"
        ></ion-icon>
      </label>
      <textarea className="text_area" />
    </>
  );
}
