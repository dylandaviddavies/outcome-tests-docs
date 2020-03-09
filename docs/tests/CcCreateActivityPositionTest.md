# CcCreateActivityPositionTest <Badge text="test" vertical="middle" />

## Test Case
Creating a co-curricular activity & position.

## Requirements
* A co-curricular module.

## Test Data
### Attributes

#### period <Badge text="string" vertical="middle" />
The period to select from the dropdown.

#### category <Badge text="string" vertical="middle" />
The category to select from the dropdown.

#### categoryOther <Badge text="string" vertical="middle" />
The name of a new category to create.

#### director <Badge text="string" vertical="middle" />
The director to select.

#### activityAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the activity form.

#### positionAnswers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the position form.

``` json
[
  {
    "period": "2014 - 2015",
    "category": null,
    "categoryOther": "New Category",
    "director": "1",
    "activityAnswers": [
      {
        "question": {
          "id": "1118",
          "type": "MultiChoice"
        },
        "values": [
          "Fall"
        ]
      }
    ],
    "positionAnswers": [
      {
        "question": {
          "id": "1044",
          "type": "Text"
        },
        "value": "Head Coach"
      }
    ]
  }
]
```

