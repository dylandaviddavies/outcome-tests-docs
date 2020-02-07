# Date Answer <Badge text="object" vertical="middle" />
The answer for a [Date](./np-question-type/#date) type [Job Form Question](./np-question)

## Attributes
### question <Badge text="object" vertical="middle" />
The [Job Form Question](./np-question) being answered.

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