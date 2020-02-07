# ExpCreateOpportunityTest <Badge text="test" vertical="middle" />

## Test Case
Creating an experiential opportunity.

## Requirements
* An experiential education module.
* The portal staff account needs to be an experiential admin.

## Test Data
### Attributes

#### expType <Badge text="string" vertical="middle" />
The Dynamic Form Answer of the experience type to select from the dropdown.

#### numberOfPositions <Badge text="string" vertical="middle" />
The number of positions.

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
    "name": {
        "question": {
            "id": "81",
            "type": "MultilingualText",
        },
        "values": {
            "en": "Hello, World",
            "fr": "Bonjour le monde"
        }
    },
    "synopsis": {
        "question": {
            "id": "82",
            "type": "MultilingualLargeText",
        },
        "values": {
            "en": "Hello, World",
            "fr": "Bonjour le monde"
        }
    },
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

