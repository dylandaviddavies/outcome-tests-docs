# Setup Files
In the ***Setup*** folder of the automated testing project, you'll find setup files such as ***qaauto-setup.bat*** and ***new-setup.bat***.  These files will install the [Resource Files](./resource-files) necessary for the tests to run against a specific site.

::: tip
The setup files use repositories hosted on ***GitHub*** so make sure you have access to those repositories first before trying to run their respective setup file.
:::

## New Site or Local Server
Run ***new-setup.bat*** to create a new setup and install the base [Resource Files](./resource-files) that you'll need to configure for your site or local server. [Learn how to setup a Development Environment.](./development-environment)

## Existing Site
If you're targetting a specific site, run the setup file named after it to install its [Resource Files](./resource-files).

For example, ***qauto-setup.bat*** will install the setup for [QA Auto](https://qaauto.orbiscommunications.com).

## Files
| File           | Site | Resource Repository                                                                 |
| -------------- | ---- | ----------------------------------------------------------------------------------- |
| *qaauto-setup* | [QA Auto](https://qaauto.orbiscommunications.com) | [qaauto-tests](https://github.com/mikerotenberg/qaauto-tests)                       |
| *new-setup*   | None | [outcome-tests-resources](https://github.com/mikerotenberg/outcome-tests-resources) |
