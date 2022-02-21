import java.io.IOException;
import java.util.Scanner;
import java.lang.Math;

public class Main {

    public static void main(String[] args) throws IOException {
 
        Scanner read = new Scanner(System.in);
        
        double raio = read.nextDouble();
        double N = 3.14159;
        double area;
        
        area = N * Math.pow(raio, 2);
        
        System.out.println("A=%.4lf" + area);

    }

}