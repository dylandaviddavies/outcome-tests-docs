# GeCreateSimpleEventTest <Badge text="test" vertical="middle" />

## Test Case
Create a simple event.

## Requirements
* A global event module.
* The portal staff account needs to be an event admin.

## Test Data
### Attributes

#### event <Badge text="object" vertical="middle" />
* **status** <Badge text="string" vertical="middle" />
 The status to select from the dropdown.
* **category** <Badge text="string" vertical="middle" />
 The category to select from the dropdown.
* **title** <Badge text="object" vertical="middle" />
 The multilingual title. See [Translations](../model/translations).
* **description** <Badge text="object" vertical="middle" />
 The multilingual description. See [Translations](../model/translations).
* **presenter** <Badge text="string" vertical="middle" />
* **location** <Badge text="string" vertical="middle" />
 The location to select from the dropdown.
* **locationOther** <Badge text="string" vertical="middle" />
 A location not in the dropdown.
* **maxRegistrations** <Badge text="number" vertical="middle" />
 The maximum number of registrations.
* **ecommerceOrderPrefix** <Badge text="string" vertical="middle" />
 The ecommerce order prefix.

#### registrationType <Badge text="object" vertical="middle" />
* **name** <Badge text="object" vertical="middle" />
 The multilingual name. See [Translations](../model/translations).
* **description** <Badge text="object" vertical="middle" />
 The multilingual description. See [Translations](../model/translations).
* **capacity** <Badge text="number" vertical="middle" />
 The capacity.
* **fee** <Badge text="object" vertical="middle" />
  * **price** <Badge text="number" vertical="middle" />
   The price.
  * **type** <Badge text="string" vertical="middle" />
   The [Fee Type](../model/ge-reg-type-option-fee-type) to pick.
  * **label** <Badge text="string" vertical="middle" />
   The label.
  * **min** <Badge text="number" vertical="middle" />
   The minimum number that must be bought per person.
  * **max** <Badge text="number" vertical="middle" />
   The maximum number that can be bought per person.

``` json
{
    "event": {
        "status": "Approved",
        "category": "Drop-in Hours",
        "title": {
            "en": "Introduction to Shopify",
            "fr": "Introduction ? Shopify"
        },
        "description": {
            "en": "Tobias L�tke will be teaching you how to build your own Shopify site from scratch.",
            "fr": "Tobias L�tke vous apprendra ? cr�er votre propre site Shopify ? partir de z�ro."
        },
        "presenter": "Tobias L�tke",
        "location": "104 King St, 3rd Floor Boardroom",
        "locationOther": null,
        "maxRegistrations": "10",
        "ecommerceOrderPrefix":  "shopify"
    },
    "registrationType": {
        "name": {
            "en": "Ticket",
            "fr": "Billet"
        },
        "description": {
            "en": "A ticket to the presentation.",
            "fr": "Un ticket pour la pr�sentation."
        },
        "capacity": "10",
        "publicAggregatorModule": "Event Aggregator"
    },
    "registrationTypeOption": {
        "label": {
            "en": "Free",
            "fr": "Gratuit"
        },
        "description": {
            "en": "Free admission.",
            "fr": "Entr�e libre."
        },
        "capacity": "10",
        "fee": {
            "price": "5",
            "type": "PerUnit",
            "label": "Ticket",
            "min": "0",
            "max": "10"
        }
    }
}
```

