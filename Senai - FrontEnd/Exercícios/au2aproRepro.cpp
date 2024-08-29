#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(void){
	
	setlocale(LC_ALL, "Portuguese");
	
	float nota;
	
	printf("Digite o valor da sua nota: ");
	scanf("%f", &nota);
	
	if(nota >= 7) {
		printf("Você está aprovado.");
	} else if (nota == 0) {
		printf("Você está reprovado");
	} else {
		printf("Você está de recuperação");
	}
	
	return 0;
}


