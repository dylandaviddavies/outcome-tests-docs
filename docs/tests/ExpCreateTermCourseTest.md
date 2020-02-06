# ExpCreateOpportunityTest <Badge text="test" vertical="middle" />

## Test Case
Creating an experiential term course.

## Requirements
* An experiential education module.
* The portal staff account needs to be an experiential admin.
* At least one existing term.

## Test Data
### Attributes

#### name <Badge text="object" vertical="middle" />
The multilingual course name. See [Translations](../model/translations).

#### code <Badge text="object" vertical="middle" />
The multilingual course code. See [Translations](../model/translations).

#### section <Badge text="object" vertical="middle" />
The multilingual course section. See [Translations](../model/translations).

#### academic <Badge text="boolean" vertical="middle" />
Whether the course is an academic course or not.

#### term <Badge text="text" vertical="middle" />
The term to select from the dropdown.

#### description <Badge text="object" vertical="middle" />
The multilingual term course description. See [Translations](../model/translations).

#### website <Badge text="text" vertical="middle" />
The course website.

#### contactEmail <Badge text="text" vertical="middle" />
The course contact email.

#### manager <Badge text="object" vertical="middle" />
The manager to lookup and select. See [Lookup Search](..model/lookup).

#### manager <Badge text="object" vertical="middle" />
The faculty member to lookup and select. See [Lookup Search](..model/lookup).

#### expType <Badge text="object" vertical="middle" />
The ID of the experience type we want to add to the term course. 

``` json
[
  {
    "name": {
      "en-CA": "Introduction to Networking",
      "fr-CA": "Introduction au réseautage"
    },
    "code": {
      "en-CA": "NTWRK",
      "fr-CA": "NTWRK"
    },
    "section": {
      "en-CA": "All",
      "fr-CA": "Tout"
    },
    "academic": true,
    "term": "2018 - Fall",
    "description": {
      "en-CA": "In this course you'll learn basic networking fundamentals.",
      "fr-CA": "Dans ce cours, vous apprendrez les principes de base du réseautage."
    },
    "website": "https://www.google.ca/",
    "contactEmail": "example@example.com",
    "manager": {
      "search": "73899",
      "label": "Jared Ame (73899)"
    },
    "faculty": {
      "search": "stafffaculty",
      "label": "Staff Faculty (stafffaculty)"
    },
    "expType": "7"
  }
]
```

