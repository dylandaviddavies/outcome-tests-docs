# GeCreateSimpleRegisterableEventTest <Badge text="test" vertical="middle" />

## Test Case
Create a simple event with registration enabled.

## Requirements
* A global event module.
* The portal staff account needs to be an event admin.

## Test Data
### Attributes

#### status <Badge text="string" vertical="middle" />
The status to select from the dropdown.

#### category <Badge text="string" vertical="middle" />
The category to select from the dropdown.

#### subcategory <Badge text="string" vertical="middle" />
The subcategory to select from the dropdown.

#### title <Badge text="object" vertical="middle" />
The multilingual title. See [Translations](../model/translations).

#### description <Badge text="object" vertical="middle" />
The multilingual description. See [Translations](../model/translations).

#### presenter <Badge text="string" vertical="middle" />
The presenter.

#### location <Badge text="string" vertical="middle" />
The location to select from the dropdown.

#### locationOther <Badge text="string" vertical="middle" />
A location that isn't in the location dropdown.

#### maxRegistrations <Badge text="string" vertical="middle" />
The maximum number of registrations.

``` json
{
    "status": "Approved",
    "category": "Drop-in Hours",
    "title": {
        "en-CA": "Introduction to Shopify",
        "fr-CA": "Introduction ? Shopify"
    },
    "description": {
      "en-CA": "Tobias Lütke will be teaching you how to build your own Shopify site from scratch.",
      "fr-CA": "Tobias Lütke vous apprendra ? créer votre propre site Shopify ? partir de zéro."
    },
    "presenter": "Tobias Lütke",
    "location": "104 King St, 3rd Floor Boardroom",
    "locationOther": null,
    "maxRegistrations": "10"
}
```

