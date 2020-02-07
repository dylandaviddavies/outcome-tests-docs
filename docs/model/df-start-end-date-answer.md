# Start & End Date Answer <Badge text="object" vertical="middle" />
The answer for a [Start & End Date](./df-question-type/#start-end) type Dynamic Form Question

## Attributes
### question <Badge text="object" vertical="middle"/>
The [Dynamic Form Question](./df-question) being answered.

### start <Badge text="string" vertical="middle" />
The start date value. **Date Format**: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### end <Badge text="string" vertical="middle" />
The end date value. **Date Format**: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

## Usage
``` json
{
    "question": {
        "id": "101",
        "type": "StartEndDate"
    },
    "start": "2019-12-25T00:00:00-05:00",
    "end": "2019-12-26T23:59:59-05:00"   
}
```