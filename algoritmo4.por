programa {
  funcao inicio() {
    real valor_em_metros, conversao
    escreva("coloque uma medida em metros\n:")
    leia(valor_em_metros)
    escreva("convertendo...")
    conversao = valor_em_metros * 100
    escreva("o valor em centímetros é de :", conversao, "cm")
  }
}
