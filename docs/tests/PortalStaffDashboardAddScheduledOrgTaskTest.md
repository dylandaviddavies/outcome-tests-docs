# PortalStaffDashboardAddScheduledOrgTaskTest <Badge text="test" vertical="middle" />

## Test Case
Create a scheduled interaction task from the portal staff dashboard.

## Requirements
* A portal staff account.
* The create interaction task button needs to be enabled on the portal staff dashboard.
* Interaction tasks need to be enabled.
* Organization tasks need to be enabled and have a category available.

## Test Data
### Attributes

#### organization <Badge text="string" vertical="middle" />
The name of the organization to put into the mass assign field.

#### category <Badge text="string" vertical="middle" />
The category to select from the dropdown.

#### subcategory <Badge text="string" vertical="middle" />
The subcategory to select from the dropdown.

#### priority <Badge text="string" vertical="middle" />
The priority of the task.

#### status <Badge text="string" vertical="middle" />
The status of the task.

#### status <Badge text="string" vertical="middle" />
The details of the task. See [Translations](../model/translations).

``` json
[
  {
    "organization": "ArcelorMittal Dofasco",
    "category": "Org",
    "subcategory": "",
    "priority": "High",
    "status": "In Progress",
    "details": {
      "en": "Hello, world how are you?!",
      "fr": "Bonjour, le monde comment vas tu"
    }
  }
]
```

