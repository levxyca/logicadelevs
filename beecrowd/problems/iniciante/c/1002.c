#include <stdio.h>
#include <math.h>
 
int main() {
 
    double raio;
    double N = 3.14159;
    double area;

    scanf("%lf\n", &raio);

    area = N * pow(raio, 2);

    printf("A=%.4lf\n", area);
 
    return 0;
}