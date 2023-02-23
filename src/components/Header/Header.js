import style from "./_header.module.scss";

export default function Header({ handleReduceModal }) {
  return (
    <div className={style.header} onClick={handleReduceModal}>
      <button className={style.btn_reduce}></button>
      <div className={style.header_content}>
        <span>
          <ion-icon name="aperture-outline"></ion-icon>Votre configuration
        </span>
        <div>
          <p className={style.header_text}>Prix total : 0000,00€</p>
          <p className={`${style.header_text} ${style.header_text__Secondary}`}>
            ou 3 mensualités de 00,00€
          </p>
        </div>
      </div>
    </div>
  );
}
