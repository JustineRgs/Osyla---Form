import "./_header.scss";

export default function Header({ handleReduceModal }) {
  return (
    <div className="header">
      <button className="btn_reduce" onClick={handleReduceModal}></button>
      <div className="header_content">
        <span>
          <ion-icon name="aperture-outline"></ion-icon>Votre configuration
        </span>
        <div>
          <p className="header_text">Prix total : 0000,00€</p>
          <p className="header_text header_text--Secondary">
            ou 3 mensualités de 00,00€
          </p>
        </div>
      </div>
    </div>
  );
}
