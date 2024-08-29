#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
	
	setlocale(LC_ALL, "Portuguese");
	
	int idade;
	
	printf("Digite a sua idade: ");
	scanf("%d", &idade);
	
	if(idade >= 18){
		printf("Você é maior de idade.");
	} else {
		printf("Você não é maior de idade.");
	}
	
	return 0;
}


