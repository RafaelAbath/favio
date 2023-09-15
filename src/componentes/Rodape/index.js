import React from "react";
import styles from "./Rodape.module.css";

export default function Rodape(props) {
  return (
    <div className={styles.rodape}>
      <img className={styles.facebook} src={props.facebook} alt="Facebook" />
      <img className={styles.instagram} src={props.instagram} alt="Instagram" />
      <img className={styles.twitter} src={props.twitter} alt="Twitter" />
      <p className={styles.data}>{getDataAtual()}</p>
    </div>
  );
}

function getDataAtual() {
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();
  return dia + "/" + mes + "/" + ano;
}
