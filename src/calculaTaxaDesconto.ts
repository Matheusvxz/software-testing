
function calculaTaxaDesconto(tipoClient: string, valorCompra: number): number {
    let taxa = 0;

    if(valorCompra >= 500 || tipoClient === "ouro") {
        return 15;
    } else {
        if(tipoClient === "prata" || valorCompra >= 400) {
            taxa = 10;
        } else {
            if(valorCompra >= 200 || tipoClient === "bronze") {
                taxa = 5;
            }
        }
    }

    return taxa;
}

export {
    calculaTaxaDesconto
}