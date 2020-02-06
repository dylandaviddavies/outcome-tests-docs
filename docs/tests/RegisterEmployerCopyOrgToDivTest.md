# RegisterEmployerCopyOrgToDivTest <Badge text="test" vertical="middle" />

## Test Case
Use the 'Copy Field Values From Organization' button on the employer registration form.

## Requirements
* Organization-Division mappings need to be configured through the contacts database.

## Test Data
### Attributes

#### questionPairsThatMustMatch <Badge text="array" vertical="middle" />
The pairs of question IDs that must have the same value after clicking the copy button.

#### organizationAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the organization form.

#### divisionAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the division form.

``` json
[
  {
    "questionPairsThatMustMatch": [
      [ "847", "44" ]
    ],
    "organizationAnswers": [
      {
        "question": {
          "id": "847",
          "type": "Text"
        },
        "value": "Hello, World"
      }
    ],
    "divisionAnswers": [
      {
        "question": {
          "id": "44",
          "type": "Text"
        }
      }
    ]
  }
]
```

