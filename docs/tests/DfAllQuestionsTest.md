# DfAllQuestionsTest

## Test Case
Answering a dynamic form with all types of Dynamic Form Questions.

## Requirements
* A test module
* A questionnaire in the **Dynamic Forms** test page that has questions of all types.

## Attributes

#### questionnaireId <Badge text="string" vertical="middle" />
Toggles the occurred checkbox.

#### answers <Badge text="array of Dynamic Form Answers" vertical="middle" />
The [Dynamic Form Answers](../data/df-answer) for the Dynamic Form.

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