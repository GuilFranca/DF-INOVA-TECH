#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(void){
	
	setlocale(LC_ALL, "Portuguese");
	
	int num;
	
	printf("Digite um n�mero: ");
	scanf("%d", &num);
	
	if(num == 0){
		printf("Este n�mero � igual a ZERO.");
	} else if (num > 0){
		printf("Este n�mero � positivo.");
	} else {
		printf("Este n�mero � negativo.");
	}
	
	return 0;
}


