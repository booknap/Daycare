# PetDaycare

## Description
- This program is daycare center. You can deposit your pet and get him/her back by name.

## Design patterns and UML diagrams

- Singleton pattern: Because CatFactory class should have only one, so I wrote it to be Singleton class.

![Singleton](https://github.com/booknap/Daycare/blob/master/UML/Singleton.png)

- Factory pattern: In case we want to add DogFactory, we just implements Pet interface and then we can handle DogFactory.

![Factory](https://github.com/booknap/Daycare/blob/master/UML/Factory.png)

- Null Object design pattern: In case a customer input the name of cat that does not exist, the program will return null object to handle error.  

![Null Object](https://github.com/booknap/Daycare/blob/master/UML/Null.png)