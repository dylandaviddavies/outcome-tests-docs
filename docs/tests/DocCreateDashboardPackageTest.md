# DocCreateDashboardPackageTest <Badge text="test" vertical="middle" />

## Test Case
Create a dashboard application package.

## Requirements
* Dashboard documents must be configured.
* The student account must have documents.

## Test Data
### Attributes

#### name <Badge text="string" vertical="middle" />
The name for the package.

#### docs <Badge text="array" vertical="middle" />
The documents to use in the package.
* **item** <Badge text="object" vertical="middle" />
  * **type** <Badge text="string" vertical="middle" />
 The ID of the document type.
  * **doc** <Badge text="string" vertical="middle" />
 The name of the document to select from the dropdown. 

``` json
[
    {
        "name": "Resume",
        "docs": [
            {
                "type": "102",
                "doc": "Cover Letter"
            }
        ]
    }
]
```

