import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CatFactoryDefs {

    private CatFactory c = CatFactory.getInstance();

    @Given("I want to deposit my cat into a daycare, its name is (.+)")
    public void I_want_to_deposit_my_cat_into_a_daycare_its_name_is(String name){
        c.addPet(name);
    }

    @Then("I want to get my cat named (.+)")
    public void I_want_to_get_my_cat_named(String name) {
        assertEquals(name, c.getPet(name).getName());
    }

}
