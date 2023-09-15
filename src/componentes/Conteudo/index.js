import React from "react";

const Conteudo = () => {
  return (
    <div>
      Conteudo
      <form onSubmit={() => alert("favorito salvo")}>
        <label>nome do site</label>
        <input name="nome_site"></input>
        <lable> url</lable>
        <input type="url" name="url"></input>
        <button>salvar</button>
      </form>
    </div>
  );
};

export default Conteudo;
