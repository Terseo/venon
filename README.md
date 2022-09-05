## How to Run all the Test

`npm run cy:all`: this command run all test created (filter, get data and add new machines.)

# Structure

- Fixture: Set all values used in the TCs automated
- Support: Contains all new commands and selected for all the TCs
- e2e: Contains all TCs already automated

## Regression Test Plan

The regression would be executed at the end of the regression or when it is thought to deploy some hotfix of the application.

- Verify that is possible filter a computer by name
- Verify that is not possible filter a computer without to set a value
- Verify that is possible create a new computer
- Verify that is possible edit a computer
- Verify that is possible remove a computer
- Verify that is possible cancel an operation of CRUD
- Verify that is possible navigate in page using the pagination
- Verify that is possible sort the 'Computer Name' asc and desc
- Verify that is possible sort the 'Introduced' asc and desc
- Verify that is possible sort the 'Discontinued' asc and desc
- Verify that is possible sort the 'Company' asc and desc

## Maintenance

This would be maintained based on the priorities of the application. If a new feature is implemented it should be added to future regressions or if a feature was removed it should be notified to be removed from the test plan as well.

## Integrated with Pipelines

- Identifying the most critical areas and automate these for daily execution.
- Configure the pipeline so that these are run in each new PR.
- Schedule the execution of the suite at least once a day in order to detect any unexpected change or issue.
- The entire suite of automated TCs must be run at the same time as the manual regression in order to detect release issues.
