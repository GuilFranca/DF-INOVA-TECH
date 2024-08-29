/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
#include <stdbool.h>

int main(){
    
    char nome[30];
    int idade, anoNascimento;
    float altura;
    bool maiorIdade;
    
    printf("-=-=-Cadastro do Usuário-=-=-");
    
    printf("\nDigite o seu nome: ");
    scanf("%s", &nome);
    fflush(stdin);
    
    printf("\nDigite o ano do seu nascimento: ");
    scanf("%d", &anoNascimento);
    
    idade = 2024 - anoNascimento;
    
    printf("\nDigite a sua altura (em cm): ");
    scanf("%f", &altura);
    
    printf("%s tem %d anos e mede %.2fm.\n", nome, idade, altura);
    
    if(idade >= 18){
        printf("É maior de idade.");
    } else {
        printf("Não é maior de idade.");
    }

    return 0;
}
