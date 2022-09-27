import "./App.css";
import { Lista } from "./components/list/list";
import { Header } from "./components/header/header";

function App() {
  const bebidas = [
    "Agua com Gás",
    "Agua sem Gás",
    "Coca Lata",
    "Coca 600",
    "Coca Lata Z",
    "Coca 600 Z",
    "Del Vale",
    "Guarana Lata",
    "Guarana Lata Z",
    "Guarana 600",
    "Sprite",
    "Sprite Limon",
    "Fanta",
    "Schwepps",
    "Heineken",
    "Original",
  ];

  const destilados = ["Cahaça", "Vodka", "Rum"];

  const naturais = ["Hortelã", "Limão", "Laranja", "Abacaxi", "Morango"];

  const sobremesa = [
    "Amendoin",
    "Canudo Biju",
    "Chantily",
    "Sorvete Creme",
    "Cob. Caramelo",
    "Sorvete Morango",
    "Cob. Morango",
    "Sorvete Chocolate",
    "Cob. Chocolate",
    "Leite em pó",
    "Leite condensado",
    "Creme de Leite",
    "Ovo Maltino",
    "Nutela",
    "Petit Gateau",
    "Calda de Nutela",
    "Brownie",
  ];

  const outros = [
    "Canudo Suco",
    "Canudo Milkshake",
    "Canudo Drink",
    "Copo Descartavel",
    "Garrafa Delivery",
    "Guardanapos",
    "Colher de Molho",
    "Sache de Sal",
    "Sache de Açucar",
    "Palito de Dentes",
    "Álcool"
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Lista
          bebidas={bebidas}
          destilados={destilados}
          naturais={naturais}
          sobremesa={sobremesa}
          outros={outros}
        />
      </header>
    </div>
  );
}

export default App;
