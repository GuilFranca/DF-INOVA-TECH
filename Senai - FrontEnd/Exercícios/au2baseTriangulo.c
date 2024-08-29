#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(void){
	
	setlocale(LC_ALL, "Portuguese");
	
	float base, altura, area;
	
	printf("-=-=-Área do Triângulo-=-=-");
	
	printf("\n\nDigite o valor da base: ");
	scanf("%f", &base);
	
	printf("\nDigite o valor de altura: ");
	scanf("%f", &altura);
	
	area = (base * altura) / 2;
	
	printf("\nA área do triângulo é %.2f", area);
	
	return 0;
}


