programa {
  funcao inicio() {
    inteiro base, altura, lado_do_quadrado, area, area_ao_quadrado
    escreva("defina quantos metros tem um lado de um quadrado de 2 metros \n:")
    leia(lado_do_quadrado)
    escreva("agora defina quantos metros tem sua base \n:")
    leia(base)
    escreva("agora defina quantos metros tem sua altura \n:")
    leia(altura)
    area = base * altura
    area_ao_quadrado = (base*2) + (altura*2)
    escreva("organizando dados....\n")
    escreva(" a área desse quadrado é de : ",area,"m2")
    escreva(" a área ao quadrado desse quadrado é de: ",area_ao_quadrado,"m2")
  }
}
