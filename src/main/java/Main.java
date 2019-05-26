import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        CatFactory factory = CatFactory.getInstance();
        Scanner sc = new Scanner(System.in);
        Scanner in = new Scanner(System.in);
        String name;
        System.out.println("Welcome to Book's daycare center");
        while(true) {
            System.out.println("May I help you? ( 0 exit, 1 add pet, and 2 get pet )");
            System.out.print("Your input: ");
            int action = sc.nextInt();
            if(action == 0) {
                System.out.println("Thank you.");
                break;
            }
            else if(action == 1) {
                System.out.print("Enter your pet name: ");
                name = in.nextLine();
                factory.addPet(name);
                System.out.println("Deposited " + name + "");
            }
            else if(action == 2) {
                System.out.println("Enter your pet name: ");
                name = in.nextLine();
                factory.getPet(name);
                if(factory.getPet(name).getName() == null)
                    System.out.println(name +" is not available in daycare center.");
                else {
                    System.out.println("Get " + factory.getPet(name).getName() + " back");
                    factory.removePet(name);
                }
            }
        }
    }

}
