# User Registration Form Answer <Badge text="object" vertical="middle" />
The answer for a [User Registration Form Question](./acrm-question).

## Types
* [Text](./acrm-text-answer)
* [LargeText](./acrm-large-text-answer)
* [EmailCampaignOptIn](./acrm-email-campaign-opt-in-answer)
* [EmailOptIn](./acrm-email-opt-in-answer)
* [EmailSignature](./acrm-email-signature-answer)
* [SingleChoice](./acrm-single-choice-answer)
* [MultiChoice](./acrm-multi-choice-answer)
* [Date](./acrm-date-answer)
* [DateTime](./acrm-datetime-answer)
* [Time](./acrm-time-answer)
* [Number](./acrm-number-answer)

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