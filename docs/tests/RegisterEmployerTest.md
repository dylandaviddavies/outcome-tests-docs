# RegisterEmployerTest <Badge text="test" vertical="middle" />

## Test Case
Register a new employer.

## Requirements
* An employer registration module.

## Test Data
### Attributes

#### organizationAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the organization form.

#### divisionAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the division form.

#### userAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/acrm-answer) for the user form.

``` json
[
  {
    "organizationAnswers": [
      {
        "question": {
          "id": "1217",
          "type": "Text"
        },
        "value": "https://www.linkedin.com/in/dylandaviddavies/"
      }
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
        },
        "value": "myUsername"
      }
    ]
  }
]
```

