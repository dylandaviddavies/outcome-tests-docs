# Azure Setup

## Resources Pipeline
Use [this template repository](https://github.com/mikerotenberg/outcome-tests-resources) to create a new resource repository for your site.

Once you've created your resource repository, edit the ***.runsettings*** file in the ***RunSettings*** folder and edit the test data files in the TestData folder to fit your site. Refer to the [Tests](../tests/) guide for what each test expects in its data file. 

Once done, go into Azure and create a new pipeline called *Resources* using the GitHub repository you created using the template. Make sure to select the existing *azure-pipelines.yml* file as your configuration file of choice.

## Automated Testing App Pipeline
Go into Azure and import [this](https://github.com/mikerotenberg/outcome-tests/blob/master/Automated%20Testing%20App.json) pipeline. 

Next, select ***windows-2019*** for the agent pool specification.

## Release Pipeline
Create a release pipeline and add the ***Resources Pipeline*** and ***Automated Testing App Pipeline*** as artifacts. 

Next, add an empty stage. 

Click into the stage and click ***Run on agent***. 

Select ***windows-2019*** for your agent pool specification.

## Tasks
### Copy .runsettings
Add a new ***Copy Files*** task with the following settings:
| Setting          | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| *Source Folder*  | $(System.DefaultWorkingDirectory)/_Resources/drop/RunSettings |
| *Contents*       | **                                                            |
| *Target Folder* | d:/a/r1/a/_Automated Testing App/drop/                         |
| *Overwrite*     | Checked                                                        |  

### Copy TestData
Add a new ***Copy Files*** task with the following settings:
| Setting         | Value                                                      |
| --------------- | ---------------------------------------------------------- |
| *Source Folder* | $(System.DefaultWorkingDirectory)/_Resources/drop/TestData |
| *Contents*      | **                                                         |
| *Target Folder* | d:/a/r1/a/_Automated Testing App/drop/TestData             |
| *Overwrite*     | Checked                                                    |  

### Copy Drivers
Add a new ***Copy Files*** task with the following settings:
| Setting         | Value                                                     |
| --------------- | --------------------------------------------------------- |
| *Source Folder* | $(System.DefaultWorkingDirectory)/_Resources/drop/Drivers |
| *Contents*      | **                                                        |
| *Target Folder* | d:/a/r1/a/_Automated Testing App/drop/                    |
| *Overwrite*     | Checked                                                   |        

### Run Selenium Tests
Add a new ***.NET Core*** task with the following settings:
| Setting              | Value                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| *Command*            | custom                                                                                              |
| *Path to project(s)* | **/OutcomeTests.dll                                                                                 |
| *Custom command*     | vstest                                                                                              |
| *Arguments*          | --logger:"trx;LogFileName=TEST.xml" --settings:"d:/a/r1/a/_Automated Testing App/drop/.runsettings" |
| *Continue on error*  | Checked                                                                                             |

::: tip
You can customize ***Arguments*** to add additional settings or filtering. See [here](https://docs.microsoft.com/en-us/visualstudio/test/vstest-console-options?view=vs-2019).
:::

### Publish Test Results
Add a new ***Publish Test Results*** task with the following settings:
| Setting                     | Value                             |
| --------------------------- | --------------------------------- |
| *Test result format*        | VSTest                            |
| *Test result files*         | **/TEST.xml                       |
| *Search folder*             | $(System.DefaultWorkingDirectory) |
| *Merge test results*        | Checked                           |
| *Test run title*            | Selenium Tests                    |
| *Upload test results files* | Checked                           |