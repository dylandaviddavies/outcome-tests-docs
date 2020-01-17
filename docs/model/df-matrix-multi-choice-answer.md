# Matrix Multi-Choice Answer <Badge text="object" vertical="middle" />
The answer for a [MultiChoice](./df-question-type/#matrix-multi-choice) type Dynamic Form Question

## Attributes
### question [<Badge text="object" vertical="middle" />](./df-question)
The [Dynamic Form Question](./df-question) being answered.

### values <Badge text="array of strings" vertical="middle" />
The values of the checkboxes to select.

## Usage
``` json
{
    "question": {
        "id": "6115",
        "type": "MatrixMultiChoice",
    },
    "values": [
        "0_3",
        "0_1",
        "1_2",
        "2_1"
    ]
}
```