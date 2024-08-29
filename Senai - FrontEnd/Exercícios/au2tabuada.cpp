#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(void){
	
	setlocale(LC_ALL, "Portuguese");
	
	int i, num;
	
	printf("Digite um número: ");
	scanf("%d", &num);
	
	for(i = 1; i<= 10; i++)
		printf("\n%d X %d = %d", num, i, num * i);
	
	return 0;
}


