# DfAllQuestionsTest <Badge text="test" vertical="middle" />

## Test Case
Answering a **Dynamic Form** with all [Types](../data/df-question-type) of [Dynamic Form Questions](../data/df-question).

## Requirements
* A test module
* A questionnaire in the **Dynamic Forms** test page that has questions of all [Types](../data/df-question-type).

## Test Data
### Attributes

#### questionnaireId <Badge text="string" vertical="middle" />
The unique identifier of the questionnaire being answered.

#### answers <Badge text="array of Dynamic Form Answers" vertical="middle" />
The [Answers](../data/df-answer) for the Dynamic Form.

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

