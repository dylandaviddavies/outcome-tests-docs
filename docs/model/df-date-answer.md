# Date Answer <Badge text="object" vertical="middle" />
The answer for a [Date](./df-question-type/#date) type Dynamic Form Question

## Attributes
### question [<Badge text="object" vertical="middle" />](./df-question)
The [Dynamic Form Question](./df-question) being answered.

### value <Badge text="string" vertical="middle" />
The date value. **Date Format**: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

## Usage
``` json
{
    "question": {
        "id": "101",
        "type": "Date"
    },
    "value": "2019-12-25T17:30:00-05:00"   
}
```