import style from "./_textArea.module.scss";

export default function TextArea({ label, id }) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <ion-icon
          name="information-circle-sharp"
          alt="icon d'information"
        ></ion-icon>
      </label>

      <textarea />
    </>
  );
}
