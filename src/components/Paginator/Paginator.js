import "./paginator.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Paginator({ setOpenGroup, steps }) {
  // Numéro de la page ouverte à l'instant T
  const [pageNumber, setPageNumber] = useState(0);

  // Stockage de l'url pour modification (ajout du numero de page)
  const navigate = useNavigate();

  // Action : Page suivante
  const nextPage = () => {
    setOpenGroup(false);
    navigate(`/step${pageNumber + 1}`);
    setPageNumber(pageNumber + 1);
  };

  // Action : Page précédente
  const previousPage = () => {
    setOpenGroup(false);
    navigate(`/step${pageNumber - 1}`);
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="paginator">
      {pageNumber > 1 && (
        <div className="btn_previous" onClick={previousPage}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
      )}
      {pageNumber < steps.length && (
        <div className="btn_next" onClick={nextPage}>
          <span>Etape suivante</span>
          <div className="arrow_next">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      )}
    </div>
  );
}
