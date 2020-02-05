# ExpCreateOpportunityTest <Badge text="test" vertical="middle" />

## Test Case
Creating an experiential opportunity.

## Requirements
* An experiential education module.

## Test Data
### Attributes

#### expType <Badge text="string" vertical="middle" />
The name of the experience type to select from the dropdown.

#### numberOfPositions <Badge text="string" vertical="middle" />
The number of positions.

#### goLiveDate <Badge text="string" vertical="middle" />
The go live date. **Date Format**: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

#### openDate <Badge text="string" vertical="middle" />
The open date for applications/interests. **Date Format**: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

#### expiryDate <Badge text="string" vertical="middle" />
The expiry date. **Date Format**: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

#### name <Badge text="object" vertical="middle" />
The [Answer](../model/df-answer) for the opportunity name question in the Dynamic Form.

#### synopsis <Badge text="object" vertical="middle" />
The [Answer](../model/df-answer) for the opportunity synopsis question in the Dynamic Form.

#### opportunityAnswers <Badge text="array" vertical="middle" />
Any additional [Answers](../model/df-answer) for the Dynamic Form.

``` json
{
    "expType": "Practicum",
    "numberOfPositions": "5",
    "goLiveDate": "2019-1-22T08:30:00-05:00",
    "openDate": "2019-1-22T08:30:00-05:00",
    "expiryDate": "2019-2-22T08:30:00-05:00",
    "name": {
        "question": {
            "id": "81",
            "type": "Text",
        },
        "value": "Hello, World"
    },
    "synopsis": {
        "question": {
            "id": "82",
            "type": "Boolean",
        },
        "value": true
    }
    "opportunityAnswers": [
        {
            "question": {
                "id": "89",
                "type": "Text"
            },
            "value": "Hello, World"
        }
    ]
}
```

