# RegisterEmployerCopyDivToContactTest <Badge text="test" vertical="middle" />

## Test Case
Use the 'Copy Field Values From Division' button on the employer registration form.

## Requirements
* Division-Contact mappings need to be configured through the contacts database.

## Test Data
### Attributes

#### questionPairsThatMustMatch <Badge text="array" vertical="middle" />
The pairs of question IDs that must have the same value after clicking the copy button.

#### divisionAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the division form.

#### userAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/acrm-answer) for the user form.

``` json
[
  {
    "questionPairsThatMustMatch": [
      [ "847", "44" ]
    ],
    "divisionAnswers": [
      {
        "question": {
          "id": "847",
          "type": "Text"
        },
        "value": "Hello, World"
      }
    ],
    "userAnswers": [
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

