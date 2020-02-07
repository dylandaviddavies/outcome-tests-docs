# Multilingual Large Text Answer <Badge text="object" vertical="middle" />
The answer for a [MultilingualLargeText](./df-question-type/#multilingual-large-text) type Dynamic Form Question

## Attributes
### question <Badge text="object" vertical="middle"/>
The [Dynamic Form Question](./df-question) being answered.

### values <Badge text="object" vertical="middle" />
The [Translations](./translations) for the answer.

## Usage
``` json
{
    "question": {
        "id": "6115",
        "type": "MultiChoice"
    },
    "values": {
        "en": "Hello, World",
        "fr": "Bonjour le monde"
    }
}
```