# Run Settings

The .runsettings file contains global test parameters and run configurations. You'll need to customize the file for each unique site you're targetting with the testing app.

## Parallel Testing
You can set the number of tests to run in parallel by adding the following inside the RunSettings tag:
``` xml
  <MSTest>
    <Parallelize>
      <Workers>2</Workers>
      <Scope>MethodLevel</Scope>
    </Parallelize>
  </MSTest>
```

## Test Run Parameters
Test run parameters are values available to all tests during runtime and are necessary in order to run all tests sucessfully.
``` xml
<?xml version="1.0" encoding="utf-8"?>
<RunSettings>
  <TestRunParameters>
    <Parameter name="culture" value="en" />
    <Parameter name="cultures" value="en,fr" />
    <Parameter name="baseUrl" value="https://qacurrent.orbiscommunications.com/" />
  </TestRunParameters>
</RunSettings>
```
### culture
The [culture](https://www.andiamo.co.uk/resources/iso-language-codes/) of the users being used for the tests.

### cultures
The [cultures](https://www.andiamo.co.uk/resources/iso-language-codes/) the site supports. Formatted as: L1,L2.

#### Examples
| Site                | Cultures |
| ------------------- | -------- |
| *English*           | en       |
| *English/French*    | en,fr    |
| *French/English*    | fr,en    |

### browser
The browser to run the tests with.
| Browser             | Value   |
| ------------------- | ------- |
| *Chrome*            | chrome  |
| *Firefox*           | firefox |
| *Internet Explorer* | ie      |
| *Microsoft Edge*    | edge    |

### baseUrl
The base URL of the site. For example: ***https://qacurrent.orbiscommunications.com/***

### dashboardUrl
The URL for the dashboard module.

### expUrl
The URL for the experiential module.

### loginUrl
The URL for the login page.

### contactsDatabaseUrl
The URL for the contacts database.

### employerRegistrationUrl
The URL for the employer registration page.

### testUrl
The URL for the test module.

### coopJobsUrl
The URL for the co-op job module.

### jobsUrl
The URL for the job module.

### appointmentsUrl
The URL for the appointments module.

### eventsUrl
The URL for the events module.

### ccUrl
The URL for the co-curricular module.

### portalStaffUsername
The username for the portal staff account.

### portalStaffPassword
The password for the portal staff account.

### employerUsername 
The username for the employer account.

### employerPassword
The password for the employer account.

### studentUsername
The username for the student account.

### studentPassword
The password for the student account.

### alumniUsername
The username for the alumni account.

### alumniPassword
The password for the alumni account.

### portalUserUsername 
The username for the portal user account.

### portalUserPassword
The password for the portal user account.

### staffFacultyUsername
The username for the staff faculty account.

### staffFacultyPassword 
The password for the staff faculty account.
