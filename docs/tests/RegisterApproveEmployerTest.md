# RegisterApproveEmployerTest <Badge text="test" vertical="middle" />

## Test Case
Register and approve a new employer.

## Requirements
* A portal staff account that can approve employers through the contacts database.

## Test Data
### Attributes

#### usernameQuestionId <Badge text="string" vertical="middle" />
The ID of the user registration username question.

#### organizationAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the organization form.

#### divisionAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the division form.

#### userAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/acrm-answer) for the user form.

``` json
[
  {
    "usernameQuestionId": "44",
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

