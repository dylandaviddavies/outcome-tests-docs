# GeCreateSimpleEventTest <Badge text="test" vertical="middle" />

## Test Case
Create a simple event.

## Requirements
* A global event module.

## Test Data
### Attributes

#### status <Badge text="string" vertical="middle" />
The status to select from the dropdown.

``` json
{
    "event": {
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
        "maxRegistrations": "10",
        "ecommerceOrderPrefix":  "shopify"
    },
    "registrationType": {
        "name": {
        "en-CA": "Ticket",
        "fr-CA": "Billet"
        },
        "description": {
        "en-CA": "A ticket to the presentation.",
        "fr-CA": "Un ticket pour la présentation."
        },
        "capacity": "10",
        "publicAggregatorModule": "Event Aggregator"
    },
    "registrationTypeOption": {
        "label": {
        "en-CA": "Free",
        "fr-CA": "Gratuit"
        },
        "description": {
        "en-CA": "Free admission.",
        "fr-CA": "Entrée libre."
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

