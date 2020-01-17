# Frequency Answer <Badge text="object" vertical="middle" />
The answer for a [Frequency](./df-question-type/#frequency) type Dynamic Form Question

## Attributes
### question [<Badge text="object" vertical="middle" />](./df-question)
The [Dynamic Form Question](./df-question) being answered.

### amount <Badge text="string" vertical="middle" />
The number for the amount field.

### frequency <Badge text="string" vertical="middle" />
The frequency to select for the frequency dropdown.

### hoursPerWeek <Badge text="string" vertical="middle" />
The number for the hours per week field.

## Usage
``` json
{
    "question": {
        "id": "101",
        "type": "Frequency"
    },
    "amount": "16.75",
    "frequency": "Hour",
    "hoursPerWeek": "48.2"
}
```