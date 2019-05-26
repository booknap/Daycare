Feature: Get name of the cat
  As a staff
  I want to know the name of cat
  so that I can call his or her name

  Background:
    Given I have a pet cat named Book

  Scenario:
    Then my cats name would be Book

  Scenario:
    Then my cats name would not be First
