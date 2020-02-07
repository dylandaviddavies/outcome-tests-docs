# NpCreateJobTest <Badge text="test" vertical="middle" />

## Test Case
Creating a job posting.

## Requirements
* A job posting module.

## Test Data
### Attributes

#### contact <Badge text="object" vertical="middle" />
The employer to post the job on behalf for.

#### documentsRequired <Badge text="array" vertical="middle" />
The documents required for the job. Each item in the array is a [NameValuePair](../model/name-value-pair).

#### jobAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/np-answer) for the Job Posting Form.

``` json
[
  {
    "contact": {
      "search": "21166",
      "label": "User: Mr. Angela Bates (Login:21166)"
    },
    "documentsRequired": [
      {
        "name": "Cover Letter",
        "value": "1"
      },
      {
        "name": "Resumé",
        "value": "2"
      }
    ],
    "jobAnswers": [
      {
        "question": {
          "id": "16",
          "type": "MultiChoice"
        },
        "values": [
          "Graduating Student (GSES)",
          "Laurier Work Study Program"
        ]
      },
      {
        "question": {
          "id": "17",
          "type": "Text"
        },
        "value": "Test Job"
      },
      {
        "question": {
          "id": "18",
          "type": "Text"
        },
        "value": "255 Bold St. Hamilton, ON, Canada"
      },
      {
        "question": {
          "id": "19",
          "type": "SingleChoiceDropdown"
        },
        "value": "Accounting - Chartered Accounting"
      },
      {
        "question": {
          "id": "20",
          "type": "Date"
        },
        "value": "2020-02-25T00:00:00-05:00"
      },
      {
        "question": {
          "id": "21",
          "type": "LargeText"
        },
        "value": "Hello, World"
      },
      {
        "question": {
          "id": "22",
          "type": "LargeText"
        },
        "value": "Heeeelllloooo, World"
      },
      {
        "question": {
          "id": "25",
          "type": "SingleChoiceRadio"
        },
        "value": "Yes"
      }
    ]
  }
]
```

