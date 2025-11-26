function calcular() {
    let preco = Number(document.getElementById("produto").value);
    let qtd = Number(document.getElementById("quantidade").value);
    let total = preco * qtd;

    document.getElementById("total").innerText =
        "Total: R$ " + total.toFixed(2);

    atualizarParcelas(total);
}

function atualizarParcelas(total) {
    let pagamento = document.getElementById("pagamento").value;
    let parcelasBox = document.getElementById("parcelasBox");
    let parcelasInfo = document.getElementById("parcelasInfo");

    // Mostrar ou esconder campo de parcelas
    if (pagamento === "cartao") {
        parcelasBox.style.display = "block";

        let qtd = Number(document.getElementById("parcelas").value);
        let valorParcela = total / qtd;

        parcelasInfo.innerText = `${qtd}x de R$ ${valorParcela.toFixed(2)}`;
    } else {
        parcelasBox.style.display = "none";
        parcelasInfo.innerText = "";
    }
}

function finalizarCompra() {
    alert("Compra finalizada!");
}

// Eventos
document.getElementById("produto").addEventListener("change", calcular);
document.getElementById("quantidade").addEventListener("input", calcular);
document.getElementById("pagamento").addEventListener("change", calcular);
document.getElementById("parcelas").addEventListener("change", calcular);

// Calcular ao carregar
calcular();
