programa {
  funcao inicio() {
    real valor_recebido, fazer_reajuste, valor_alterado
    escreva("insira o valor que deseja fazer o reajuste: \n")
    leia(valor_recebido)
    fazer_reajuste = valor_recebido * (15/100)
    valor_alterado = valor_recebido + fazer_reajuste 
    escreva("reajuste feito, o salário agora é de: " + valor_alterado)
  }
}
