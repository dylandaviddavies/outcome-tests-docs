# DocUploadToDashboardTest <Badge text="test" vertical="middle" />

## Test Case
Uploading a document to the dashboard.

## Requirements
* Dashboard documents must be configured.

## Test Data
### Attributes

#### name <Badge text="string" vertical="middle" />
The name for the document.

#### type <Badge text="string" vertical="middle" />
The document type to select from the dropdown.

#### file <Badge text="string" vertical="middle" />
The path to the file to upload.

``` json
[
    {
        "name": "Resume",
        "type": "Resume - .pdf",
        "file": "C:/doc.pdf"
    }
]
```

