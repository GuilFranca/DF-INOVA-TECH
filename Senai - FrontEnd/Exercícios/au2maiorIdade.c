#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
	
	setlocale(LC_ALL, "Portuguese");
	
	int idade;
	
	printf("Digite a sua idade: ");
	scanf("%d", &idade);
	
	if(idade >= 18){
		printf("Voc� � maior de idade.");
	} else {
		printf("Voc� n�o � maior de idade.");
	}
	
	return 0;
}


