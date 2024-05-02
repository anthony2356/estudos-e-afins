programa {
  funcao inicio() {
    real funcionario_salario, numero_de_horas_trabalhadas, total
    escreva("insira o salário a ser coletado\n:")
    leia(funcionario_salario)
    escreva("insira o número de horas trabalhas do funcionario\n:")
    leia(numero_de_horas_trabalhadas)
    total = (funcionario_salario) + (numero_de_horas_trabalhadas) / 30
    escreva(" calculando....\n")
    escreva(" resultado : ", total)
  }
}