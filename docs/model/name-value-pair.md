# NameValuePair <Badge text="object" vertical="middle" />
A name value pair.

## Attributes

### name <Badge text="string" vertical="middle" />
The name. Typically used for validating the display name of a value specified in the form.

### value <Badge text="string" vertical="middle" />
The value. Typically used to interact with something, such as selecting a checkbox by its value.

## Usage
``` json
{
    "search": "101",
    "label": "Kojima Hideo"
}
```

## Example
Say we're creating an appointment and we want to select a certain appointment type:
``` json
{
    "name": "Alumni Employment Service", // The display name for the appointment type that we'll see on the appointment overview page
    "value": "37" // The ID of the appointment type which is the value of its checkbox on the form
}
```