$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/addPet.feature");
formatter.feature({
  "line": 1,
  "name": "Deposit pet to daycare center",
  "description": "As a customer\r\nI want to deposit my pet to daycare center\r\nso that I can do my task without worrying about my pet",
  "id": "deposit-pet-to-daycare-center",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I want to deposit my cat into a daycare, its name is Book",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I want to deposit my cat into a daycare, its name is First",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Book",
      "offset": 53
    }
  ],
  "location": "CatFactoryDefs.I_want_to_deposit_my_cat_into_a_daycare_its_name_is(String)"
});
formatter.result({
  "duration": 178059247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First",
      "offset": 53
    }
  ],
  "location": "CatFactoryDefs.I_want_to_deposit_my_cat_into_a_daycare_its_name_is(String)"
});
formatter.result({
  "duration": 74757,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "",
  "description": "",
  "id": "deposit-pet-to-daycare-center;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I want to get my cat named Book",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I want to get my cat named First",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Book",
      "offset": 27
    }
  ],
  "location": "CatFactoryDefs.I_want_to_get_my_cat_named(String)"
});
formatter.result({
  "duration": 86325402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First",
      "offset": 27
    }
  ],
  "location": "CatFactoryDefs.I_want_to_get_my_cat_named(String)"
});
formatter.result({
  "duration": 118883,
  "status": "passed"
});
formatter.uri("features/getName.feature");
formatter.feature({
  "line": 1,
  "name": "Get name of the cat",
  "description": "As a staff\r\nI want to know the name of cat\r\nso that I can call his or her name",
  "id": "get-name-of-the-cat",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I have a pet cat named Book",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Book",
      "offset": 23
    }
  ],
  "location": "AbstractPetDefs.I_have_a_pet_cat_named(String)"
});
formatter.result({
  "duration": 286632,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "",
  "description": "",
  "id": "get-name-of-the-cat;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "my cats name would be Book",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Book",
      "offset": 22
    }
  ],
  "location": "AbstractPetDefs.my_cats_name_would_be(String)"
});
formatter.result({
  "duration": 164467,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I have a pet cat named Book",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Book",
      "offset": 23
    }
  ],
  "location": "AbstractPetDefs.I_have_a_pet_cat_named(String)"
});
formatter.result({
  "duration": 110131,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "",
  "description": "",
  "id": "get-name-of-the-cat;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "my cats name would not be First",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "First",
      "offset": 26
    }
  ],
  "location": "AbstractPetDefs.my_cats_name_would_not_be(String)"
});
formatter.result({
  "duration": 3715638,
  "status": "passed"
});
});