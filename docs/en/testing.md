# Testing in MyUoM
This is a WIP and a draft to be discussed.

Technology choice has not yet been finalised.

Testing is currently done manually and in code reviews but there are plans to implement an automated test suite.

## MyUoM Test Suite ## 

The following should be tested:
- All links by all departments are clickable and do not result in a 404(and gives details on which link, of which department is at fault)
- When the user has not selected a department certain department-specific tiles should not be clickable, and be a different color from the rest
- When the user tries to select something department-specific without having chosen a department he should be notified properly.
- Changing Language, actually changes the language without a refresh.
- Displayed strings should have a translation for all languages(this might be difficult to actually implement, we probably need a 3rd Party API for this)

These cases should form a basis to allow us to quickly iterate on the features done.
