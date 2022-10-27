import "./Box.css";
import Button from "../components/Button";
import Input from "./Input";

function Box() {
  return (
    <div className="bg-img">
      <div className="box-container">
        <div className="container-itens">
          <div className="logo">
            <img src="./img/logo1.png" alt="" />
          </div>

          <h1>Cadastro</h1>
          <form className="box-form" action="">
            <Input placeholder="nome"/>
            <Input placeholder="email"/>
            <Input placeholder="senha"/>
            <Input placeholder="confirmar senha"/>
            <Input placeholder="unidade/apartamento"/>
            <Input placeholder="link da foto"/>



            <Button text="entrar"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Box;
