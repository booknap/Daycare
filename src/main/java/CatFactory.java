import java.util.ArrayList;
import java.util.List;

public class CatFactory implements Pet {

    public List<String> list;

    private static CatFactory instance;

    private CatFactory() {
        list = new ArrayList<String>();
    }

    public static CatFactory getInstance() {
        if(instance == null) instance = new CatFactory();
        return instance;
    }

    public void addPet(String name) {
        list.add(name);
    }

    public AbstractPet getPet(String name) {
        if(list.contains(name))
            return new RealCat(name);
        return new NullCat();
    }

    public void removePet(String name) {
        list.remove(name);
    }

}
