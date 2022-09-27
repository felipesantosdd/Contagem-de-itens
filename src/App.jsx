import "./App.css";
import { Lista } from "./components/list/list";
import { Header } from "./components/header/header";

function App() {
  const itens = [
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
    "Hortelã",
    "Limão",
    "Laranja",
    "Abacaxi",
    "Morango",
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
    "Canudo Suco",
    "Canudo Milkshake",
    "Canudo Drink",
    "Copo Descartavel",
    "Garrafa Delivery",
    "Guardanapos",
    "Colher de Molho",
    "Cahaça",
    "Vodka",
    "Rum",
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Lista itens={itens} />
      </header>
    </div>
  );
}

export default App;
