# RegisterApproveEmployerTest <Badge text="test" vertical="middle" />

## Test Case
Register and approve a new employer.

## Requirements
* A portal staff account that can approve employers through the contacts database.

## Test Data
### Attributes

#### usernameAnswer <Badge text="string" vertical="middle" />
The [Answer](../model/acrm-answer) for the username question in the user form.

#### organizationAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the organization form.

#### divisionAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the division form.

#### userAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/acrm-answer) for the user form.

``` json
[
  {
    "usernameAnswer": {
      "question": {
        "id": "",
        "type": "Text"
      },
      "value": ""
    },
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
          "id": "43",
          "type": "Text"
        },
        "value": "myPassword",
        "validate": false
      },
      {
        "question": {
          "id": "44",
          "type": "Text"
        },
        "value": "Hello, World"
      }
    ]
  }
]
```

