# Lookup Search <Badge text="object" vertical="middle" />
A lookup search.

## Attributes

### search <Badge text="string" vertical="middle" />
The value to enter into the lookup.

### label <Badge text="string" vertical="middle" />
The display name for the selected option.

## Usage
``` json
{
    "search": "101",
    "label": "Kojima Hideo"
}
```

## Example
Say we're creating a job posting for a specific user, the values we'd use for the employer lookup field would be something like the following:
``` json
{
    "search": "21166", // a unique identifier for an employer (i.e username, ID)
    "label": "User: Mr. Angela Bates (Login:21166)" // the label that appears on the job overview page
}
```