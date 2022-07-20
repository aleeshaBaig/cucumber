Feature:Test ICE

    Scenario: Login Test
        Given I go to 
        When I add "Be Awesome" in the task field
        And I click the add button
        Then I should see my new task in the list