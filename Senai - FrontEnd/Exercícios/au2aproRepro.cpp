#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(void){
	
	setlocale(LC_ALL, "Portuguese");
	
	float nota;
	
	printf("Digite o valor da sua nota: ");
	scanf("%f", &nota);
	
	if(nota >= 7) {
		printf("Voc� est� aprovado.");
	} else if (nota == 0) {
		printf("Voc� est� reprovado");
	} else {
		printf("Voc� est� de recupera��o");
	}
	
	return 0;
}


