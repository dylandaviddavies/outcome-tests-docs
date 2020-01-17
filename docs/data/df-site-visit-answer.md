# Single-Choice Answer <Badge text="object" vertical="middle" />
The answer for a [Single-Choice](./df-question-type/#single-choice) type Dynamic Form Question

## Attributes
### question [<Badge text="object" vertical="middle" />](./df-question)
The [Dynamic Form Question](./df-question) being answered.

### occurred <Badge text="boolean" vertical="middle" />
Toggles the occurred checkbox.

### date <Badge text="string" vertical="middle" /> <Badge text="only visible if occurred is true" type="error" vertical="middle" />
The date value for the date of visit field. **Date Format**: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

### coordinator <Badge text="string" vertical="middle" /> <Badge text="only visible if occurred is true" type="error" vertical="middle" />
The string value for the coordinator field.

### method <Badge text="string" vertical="middle" /> <Badge text="only visible if occurred is true" type="error" vertical="middle" />
The string value for the method field.

### location <Badge text="string" vertical="middle" /> <Badge text="only visible if method is 'InPerson'" type="error" vertical="middle" />
The string value for the location field.

## Usage
``` json
{
    "question": {
        "id": "101",
        "type": "SiteVisit"
    },
    "occurred": true,
    "date": "2019-12-13T09:30:00-05:00",
    "coordinator": "Mr. William B. Google",
    "method": "InPerson",
    "location": "255 Bold St, Hamilton, ON, L8P1W1"
}
```
``` json
{
    "question": {
        "id": "101",
        "type": "SiteVisit"
    },
    "occurred": true,
    "date": "2019-12-13T09:30:00-05:00",
    "coordinator": "Mr. William B. Google",
    "method": "Videoconference"
}
```
``` json
{
    "question": {
        "id": "101",
        "type": "SiteVisit"
    },
    "occurred": false
}
```