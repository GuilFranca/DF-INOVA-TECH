/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
#include <stdbool.h>

int main(){
    
    char operador;
    float produto, num1, num2;
    
   
        printf("-=-=-Claculadora-=-=-");
    
        printf("\n+ -\n* /\n");
        scanf("%c", &operador);
        
        printf("Digite o primeiro valor: ");
        scanf("%f", &num1);
        fflush(stdin);
        
        printf("Digite o segundo valor: ");
        scanf("%f", &num2);
        fflush(stdin);

        switch (operador){
            
            case '+':
                printf("%.2f + %.2f = %.2f", num1, num2, num1 + num2);
                break;
            case '-':
                printf("%.2f - %.2f = %.2f", num1, num2, num1 - num2);
                break;
            case '*':
                printf("%.2f * %.2f = %.2f", num1, num2, num1 * num2);
                break;
            case '/':
                printf("%.2f / %.2f = %.2f", num1, num2, num1 / num2);
                break;
        }

    return 0;
}
