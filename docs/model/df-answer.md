# Dynamic Form Answer <Badge text="object" vertical="middle" />
The answer for a [Dynamic Form Question](./df-question).

## Types
* [Text](./df-text-answer)
* [MultilingualText](./df-multilingual-text-answer)
* [Multi-Choice](./df-multi-choice-answer)
* [Single-Choice](./df-single-choice-answer)
* [Date](./df-date-answer)
* [Large Text](./df-large-text-answer)
* [MultilingualLargeText](./df-multilingual-large-text-answer)
* [Site-Visit](./df-site-visit-answer)
* [Boolean](./df-boolean-answer)
* [Number Text](./df-number-text-answer)
* [Number Single-Choice](./df-number-single-choice-answer)
* [Rating](./df-rating-answer)
* [Matrix Single-Choice](./df-matrix-single-choice-answer)
* [Matrix Multi-Choice](./df-matrix-multi-choice-answer)
* [Float](./df-float-answer)
* [Start-End Date](./df-start-end-date-answer)
* [Salary](./df-salary-answer)
* [Frequency](./df-frequency-answer)
* [Time Commitment](./df-time-commitment-answer)
* [Hyperlink](./df-hyperlink-answer)


## Attributes

### validate <Badge text="boolean" vertical="middle" />
Determines whether or not to validate the answer.
::: tip
Use this property for values that won't show up in the UI again. *i.e passwords*.
:::

### automate <Badge text="boolean" vertical="middle" /> <Badge type="warning" text="development tool" vertical="middle" />
Determines whether or not to generate a random answer.
::: warning
Automation should only be used during development.
:::

``` json
{
    "question": {
        "id": "256",
        "type": "Text"
    },
    "validate": false,
    "automate": true
}
```