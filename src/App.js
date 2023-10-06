import "./App.css";
import Rotas from "./routes";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";

/*
Arquivo App JSX
Componente funcional = Porque ele é uma função
*/
function App() {
  return <Rotas />;
  /*Todo componente deve retornar um html entre parenteses*/
  // return (
  //   /*O React substitui className por class pq class é palavra reservada do JS*/
  //   <>
  //     {/* Nosso cabecalho tem uma propriedade chamada titulo */}
  //     <Cabecalho
  //       logo="logo192.png"
  //       titulo="Fav.io"
  //       subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"
  //     />
  //     <Conteudo />
  //     <Rodape
  //       facebook="./icone-facebook.png"
  //       instagram="icone-instagram.png"
  //       twitter="icone-twitter.png"
  //       data=""
  //     />

  //   </>
  // );
}

export default App;
