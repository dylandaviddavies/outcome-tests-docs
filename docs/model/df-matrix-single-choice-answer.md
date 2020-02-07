# Matrix Single-Choice Answer <Badge text="object" vertical="middle" />
The answer for a [MatrixSingleChoice](./df-question-type/#matrix-single-choice) type Dynamic Form Question

## Attributes
### question <Badge text="object" vertical="middle"/>
The [Dynamic Form Question](./df-question) being answered.

### values <Badge text="array" vertical="middle" />
The values of the radio buttons to select for each row.

## Usage
``` json
{
    "question": {
        "id": "6115",
        "type": "MatrixSingleChoice"
    },
    "values": [
        "3", // for the first row, select the fourth option
        "2", // for the second row, select the third option
        "4", // for the third row, select the fifth option
        "1" // for the fourth row, select the second option
    ]
}
```