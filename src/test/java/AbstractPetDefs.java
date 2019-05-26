import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class AbstractPetDefs {

    private RealCat c;

    @Given("I have a pet cat named (.+)")
    public void I_have_a_pet_cat_named(String name){
        c = new RealCat(name);
    }

    @Then("my cats name would be (.+)")
    public void my_cats_name_would_be(String name) {
        assertEquals(name, c.getName());
    }

    @Then("my cats name would not be (.+)")
    public void my_cats_name_would_not_be(String name) {
        assertNotEquals(name, c.getName());
    }

}
