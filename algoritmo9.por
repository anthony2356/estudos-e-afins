programa {
  funcao inicio() {
    real valor_depositado_na_poupanca, calcular_renda_na_poupanca_em_um_mes, mes_em_numero
    escreva("insira um valor para ser depositado na poupan�a: \n")
    leia(valor_depositado_na_poupanca)
    escreva("insira um valor equivalente a um m�s: \n")
    leia(mes_em_numero)
    calcular_renda_na_poupanca_em_um_mes = valor_depositado_na_poupanca + ((5 / 100) * mes_em_numero)
    escreva("o valor depositado na poupan�a rendeu ao todo com 5% ao m�s : " + calcular_renda_na_poupanca_em_um_mes)
  }
}
