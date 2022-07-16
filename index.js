function Imprimir(dados) {
const doc = new jsPDF('retrato', 'mm', [597,410])
doc.setFont('helvetica')
doc.setFontStyle('bold')
doc.text("Produto:")
}

const dados = document.getElementById(Produto)
console.log(dados);