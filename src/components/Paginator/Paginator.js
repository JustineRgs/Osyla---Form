import style from "./_paginator.module.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Paginator({ stepsURL }) {
  // Numéro de la page ouverte à l'instant T
  const [pageNumber, setPageNumber] = useState(0);

  // Stockage de l'url pour modification (ajout du numero de page)
  const navigate = useNavigate();

  // Action : Page suivante
  const nextPage = () => {
    navigate(`/step${pageNumber + 1}`);
    setPageNumber(pageNumber + 1);
  };

  // Action : Page précédente
  const previousPage = () => {
    navigate(`/step${pageNumber - 1}`);
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className={style.paginator}>
      {pageNumber > 1 && (
        <div className={style.btn_previous} onClick={previousPage}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
      )}

      {pageNumber < stepsURL.length && (
        <div className={style.btn_next} onClick={nextPage}>
          <span>Etape suivante</span>
          <div className={style.btn_next_arrow}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      )}
    </div>
  );
}
