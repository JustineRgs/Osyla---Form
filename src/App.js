import { useState } from "react";
import "./App.css";

import GroupTypeOfStore from "./components/GroupTypeOfStore.jsx/GroupTypeOfStore";

function App() {
  const groups = [
    {
      name: "Type de store",
      description: null,
      radios: [
        {
          input: {
            type: "radio",
            name: "radio",
            id: "store_banne",
          },
          label: {
            htmlFor: "store_banne",
            text: "Toile de store banne",
          },
          img: {
            alt: "Illustration d'une toile de store banne",
            src: "",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "store_bras_droits",
          },
          label: {
            htmlFor: "store_bras_droits",
            text: "Toile de store bras droits",
          },
          img: {
            alt: "Illustration d'une toile de store bras droits",
            src: "",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "store_double_pente",
          },
          label: {
            htmlFor: "store_double_pente",
            text: "Toile de store double pente",
          },
          img: {
            alt: "Illustration d'une toile de store double pente",
            src: "",
          },
        },
        {
          input: {
            type: "radio",
            name: "radio",
            id: "store_desc_verticale",
          },
          label: {
            htmlFor: "store_desc_verticale",
            text: "Toile de store descente verticale",
          },
          img: {
            alt: "Illustration d'une toile de store à descente verticale",
            src: "",
          },
        },
      ],
    },
  ];
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
      {groups.map((group, i) => (
        <GroupTypeOfStore name={group.name} radios={group.radios} key={i} />
      ))}
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
