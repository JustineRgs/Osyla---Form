import { useState } from "react";
import "./App.css";

import GroupTypeOfStore from "./components/GroupTypeOfStore.jsx/GroupTypeOfStore";

function App() {
  return (
    <div className="stage">
      <div className="block">
        <span>
          <ion-icon name="aperture-outline"></ion-icon>Votre configuration
        </span>
        <div className="block_fixe">
          <p className="text_block">Prix total : 0000,00€</p>
          <p className="text_secondary_block">ou 3 mensualités de 00,00€</p>
        </div>
      </div>
      <GroupTypeOfStore />
    </div>
  );
}
// function Group1(props) {
//   return (
//     <div className="container-input-dimension">
//       <label htmlFor="width">
//         Largeur
//         <div className="content-input">
//           <input name="width" />
//           <span>cm</span>
//         </div>
//       </label>
//       <label htmlFor="projection">
//         Projection
//         <div className="content-input">
//           <input name="projection" />
//           <span>cm</span>
//         </div>
//       </label>
//     </div>
//   );
// }

// function Group2(props) {
//   return (
//     <div className="container-input-dimension">
//       <label htmlFor="width">
//         Largeur
//         <div className="content-input">
//           <input name="width" />
//           <span>cm</span>
//         </div>
//       </label>
//       <label htmlFor="projection">
//         Projection
//         <div className="content-input">
//           <input name="projection" />
//           <span>cm</span>
//         </div>
//       </label>
//       <label htmlFor="projection-opp">
//         Projection opposée
//         <div className="content-input">
//           <input name="projection-opp" />
//           <span>cm</span>
//         </div>
//       </label>
//     </div>
//   );
// }

// function Group3(props) {
//   return (
//     <div className="container-input-dimension">
//       <label htmlFor="width">
//         Largeur
//         <div className="content-input">
//           <input name="width" />
//           <span>cm</span>
//         </div>
//       </label>
//       <label htmlFor="height">
//         Hauteur
//         <div className="content-input">
//           <input name="height" />
//           <span>cm</span>
//         </div>
//       </label>
//     </div>
//   );
// }

export default App;
