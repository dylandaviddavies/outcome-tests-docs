# Data Source
If your test utilizes an external data file, you can use the ***JsonDataSource*** method attribute to mark a test method as having a corresponding JSON data file in the ***TestData*** folder. When the test is run, the values in the data file are bound to the test method's parameters.

## Format
Every data file starts with a surrounding array representing the test runs. Each run contains an object with properties that map to the test method's parameters. It's encouraged that each run has different values to increase coverage.

## Example
``` json
// /TestData/MyTest.json
[
    // Test Run 1
    {
        "id": "Hello, world",
        "title": "Sun"
    },
    // Test Run 2
    {
        "id": "Goodbye, world",
        "title": "Moon"
    }
]
```

``` csharp
// /Tests/MyTest.cs 
[TestClass]
public class MyTest : BaseTest {
    [TestMethod, JsonDataSource]
    public void Test(string id, string title) {
        // do something
    }
}
```