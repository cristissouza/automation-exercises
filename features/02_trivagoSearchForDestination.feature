Feature: Search for a room on Trivago site

- As an user I would like to search for a hotel on Trivado website

 Background: Search for a hotel room
     Given I am on Trivago home page
     When I search for a "Natal" destination 
     And Apply the filters for one person room and sort by distance only

Scenario: View the site name that has the offer
     Then I can see the site name that has the offer

Scenario: View the hotel room price
     Then I can see the room price

Scenario: View the hotel number of stars
     Then I can see the the hotel number of stars

Scenario: View the room facilities
     When Decide to see the more details information
     Then I can see the room facilities