Feature: View information on Discourse web page

- As an user I would like to see some informations on Discourse webpage

 Background: View all Demo topic on Discourse 
     Given I am on Dircourse home page
     When I decide to see the Demo topic

Scenario: Print the description of all lock topics
    Then I can see the description of all lock topics

Scenario Outline: Print the number of items for each category and those that doesn’t have category
    When I search by a specific "category" 
    Then I can see how many items the "category" have

    Examples:
    | category      |
    | discourse     |
    | uncategorized |
    | movies        |
    | videos        |
    | gaming        |
    | tech          |
    | general       |
    | school        |
    | sports        |
    | pics          |
    | music         |
    | pets          |