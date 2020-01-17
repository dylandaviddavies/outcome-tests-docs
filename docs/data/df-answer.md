# Dynamic Form Answer
The answer for a Dynamic Form Question

## Properties
### id
#### string  
The ID of the Dynamic Form Question the answer is for.
### type
#### string  
The type of Dynamic Form Question.
### value
#### boolean  
The answer for [Boolean](./df-question-types/#boolean) type Dynamic Form Questions.  
#### date
The answer for [Date](./df-question-types/#date) type Dynamic Form Questions.
#### string  
The answer for [Text](./df-question-types/#text), [LargeText](./df-question-types/#large-text), [SingleChoice](./df-question-types/#single-choice), [Rating](./df-question-types/#rating), [NumberSingleChoice](./df-question-types/#number-single-choice), [NumberText](./df-question-types/#number-text), and [Float](./df-question-types/#float) type Dynamic Form Questions. 

## Examples
### Text
An answer for a [Text](./df-question-types/#text) type Dynamic Form Question.
``` json
{
    id: "82",
    type: "Text",
    value: "Hello, World"
}
```

### Boolean
An answer for a [Boolean](./df-question-types/#boolean) type Dynamic Form Question.
``` json
{
    id: "6112",
    type: "Boolean",
    value: true
}
```

### NumberText
An answer for a [NumberText](./df-question-types/#number-text) type Dynamic Form Question.
``` json
{
    "id": "6113",
    "type": "NumberText",
    "value": "5"
},
```

### NumberSingleChoice
An answer for a [NumberSingleChoice](./df-question-types/#number-single-choice) type Dynamic Form Question.
``` json
{
    "id": "6113",
    "type": "NumberSingleChoice",
    "value": "5"
},
```

### MultiChoice
An answer for a [MultiChoice](./df-question-types/#multi-choice) type Dynamic Form Question.
``` json
{
    "id": "6115",
    "type": "MultiChoice",
    "values": [
        "B|B",
        "D|D"
    ]
}
```

### LargeText
An answer for a [LargeText](./df-question-types/#large-text) type Dynamic Form Question.
``` json
{
    "id": "6115",
    "type": "LargeText",
    "value": "Hello, World"
}
```

### Rating
An answer for a [Rating](./df-question-types/#rating) type Dynamic Form Question.
``` json
{
    "id": "6115",
    "type": "Rating",
    "value": "4"
}
```

### SingleChoice
An answer for a [SingleChoice](./df-question-types/#single-choice) type Dynamic Form Question.
``` json
{
    "id": "6115",
    "type": "SingleChoice",
    "value": "Canada"
}
```

### MatrixSingleChoice
An answer for a [MatrixSingleChoice](./df-question-types/#matrix-single-choice) type Dynamic Form Question.
``` json
{
    "id": "6115",
    "type": "MatrixSingleChoice",
    "values": [
        "0",
        "1",
        "2",
        "3"
    ]
}
```

### MatrixMultiChoice
An answer for a [MatrixMultiChoice](./df-question-types/#matrix-multi-choice) type Dynamic Form Question.
``` json
{
    "id": "6115",
    "type": "MatrixMultiChoice",
    "values": [
        "0_3",
        "0_1",
        "1_2",
        "2_1"
    ]
}
```

### Float
An answer for a [Float](./df-question-types/#float) type Dynamic Form Question.
``` json
{
    "id": "6115",
    "type": "Float",
    "value": "2.1"
}
```

### Date
An answer for a [Date](./df-question-types/#date) type Dynamic Form Question.
``` json
{
    "id": "6115",
    "type": "Date",
    "value": "2019-12-25T17:30:00-05:00"
}
```

### Salary
An answer for a [Salary](./df-question-types/#salary) type Dynamic Form Question.
``` json
{
    "id": "6115",
    "type": "Salary",
    "amount": "16.75",
    "frequency": "Hour",
    "hoursPerWeek": "48.2"
}
```

### SiteVisit
An answer for a [SiteVisit](./df-question-types/#site-visit) type Dynamic Form Question.
``` json
{
    "id": "6126",
    "type": "SiteVisit",
    "occurred": true,
    "date": "2019-12-13T09:30:00-05:00",
    "coordinator": "Mr. William B. Google",
    "method": "InPerson",
    "location": "255 Bold St, Hamilton, ON, L8P1W1"
},
```