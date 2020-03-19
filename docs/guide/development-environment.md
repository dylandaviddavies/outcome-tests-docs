# Development Environment
This guide will step through setting up a development environment.

## Prerequesites
* Install [Git](https://git-scm.com/downloads).
* Install [GitHub](https://desktop.github.com/).
* Install [Visual Studio](https://visualstudio.microsoft.com/).
* Install [.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1).
* Install [NDP472-DevPack-ENU](https://go.microsoft.com/fwlink/?LinkId=863261&clcid=0x409).
* Clone [Outcome Tests](https://github.com/mikerotenberg/outcome-tests)

## Installing Resource Files
You'll need to install the necessary [Resource Files](./resource-files) that the automated tests need to run. You can choose to use an existing setup by running an existing [Setup File](./setup-files) or create a new setup using the ***new-setup.bat*** [Setup File](./setup-file).

### Existing Site
Choose a [Setup File](./setup-files) for the existing site you want to run the tests against. For example, if you want to run the tests against [QA Auto](https://qaauto.orbiscommunications.com), run ***qaauto-setup.bat***.

### New Site or Local Server
If you want to run the tests against your local server or a new site, run the ***new-setup.bat*** [Setup File](./setup-files) to install the base [Resource Files](./resource-files). Note that the base [Resource Files](./resource-files) won't have any values so you'll have to define the values yourself.

## Specifying the Run Settings File
In ***Visual Studio***, open the ***Outcome Tests*** project and select **Test > Configure Run Settings > Select Solution Wide runsettings File**, then select the ***.runsettings*** file.

## Happy Testing!
You're all done! Now you can run your tests using ***Visual Studio***. 

If you want to set your tests up in Azure, consult [this guide](./azure).