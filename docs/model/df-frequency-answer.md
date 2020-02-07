# Frequency Answer <Badge text="object" vertical="middle" />
The answer for a [Frequency](./df-question-type/#frequency) type Dynamic Form Question

## Attributes
### question <Badge text="object" vertical="middle"/>
The [Dynamic Form Question](./df-question) being answered.

### x <Badge text="string" vertical="middle" />
The ***x*** value to select from the dropdown.

### y <Badge text="string" vertical="middle" />
The ***y*** value to select from the dropdown.

### hoursPerWeek <Badge text="string" vertical="middle" />
The number for the hours per week field.

## Usage
``` json
{
    {
        "question": {
            "id": "6127",
            "type": "Frequency"
        },
        "x": "2",
        "y": "A"
    }
}
```