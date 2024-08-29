#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(void){
	
	setlocale(LC_ALL, "Portuguese");
	
//	int num = 10;
//	
//	if(num == 20){
//		printf("num é igual a 20.");
//	} else if (num == 10){
//		printf("num é igual a 10.");
//	} else {
//		printf("aí deu o krai memo.");
//	}
	
//	int i;
//	
//	for (int i = 1; i <= 10; i++)
//		printf("\ni = %d", i);
//	

	int contador = 0;
	
	while (contador < 5){
		printf("\nContador: %d", contador);
		contador++;
	}

	return 0;
}


