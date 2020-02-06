# Date Answer <Badge text="object" vertical="middle" />
The answer for a [Date](./acrm-question-type/#date) type User Registration Form Question.

## Attributes
### question [<Badge text="object" vertical="middle" />](./acrm-question)
The [Dynamic Form Question](./acrm-question) being answered.

### value <Badge text="string" vertical="middle" />
The date value. **Date Format**: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

## Usage
``` json
{
    "question": {
        "id": "101",
        "type": "Date"
    },
    "value": "2019-12-25"   
}
```