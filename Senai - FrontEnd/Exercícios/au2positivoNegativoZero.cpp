#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(void){
	
	setlocale(LC_ALL, "Portuguese");
	
	int num;
	
	printf("Digite um número: ");
	scanf("%d", &num);
	
	if(num == 0){
		printf("Este número é igual a ZERO.");
	} else if (num > 0){
		printf("Este número é positivo.");
	} else {
		printf("Este número é negativo.");
	}
	
	return 0;
}


