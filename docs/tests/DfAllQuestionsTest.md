# DfAllQuestionsTest <Badge text="test" vertical="middle" />

## Test Case
Answering a **Dynamic Form** with all [Types](../model/df-question-type) of [Dynamic Form Questions](../model/df-question).

## Requirements
* A test module
* A questionnaire in the **Dynamic Forms** test page that has questions of all [Types](../model/df-question-type).

## Test Data
### Attributes

#### questionnaireId <Badge text="string" vertical="middle" />
The unique identifier of the questionnaire being answered.

#### answers <Badge text="array" vertical="middle" />
The [Answers](../model/df-answer) for the Dynamic Form.

``` json
{
    "questionnaireId": "42",
    "answers": [
        {
            "question": {
                "id": "81",
                "type": "Text",
            },
            "value": "Hello, World"
        },
        {
            "question": {
                "id": "82",
                "type": "Boolean",
            },
            "value": true
        }
    ]
}
```

