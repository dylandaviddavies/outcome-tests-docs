# Date Time Answer <Badge text="object" vertical="middle" />
The answer for a [DateTime](./acrm-question-type/#date) type User Registration Form Question.

## Attributes
### question <Badge text="object" vertical="middle" />
The [User Registration Form Question](./acrm-question) being answered.

### value <Badge text="string" vertical="middle" />
The date value. **Date Format**: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

## Usage
``` json
{
    "question": {
        "id": "101",
        "type": "DateTime"
    },
    "value": "2019-12-25T17:30:00-05:00"   
}
```