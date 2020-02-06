# SaCreateAvailableSlotTest <Badge text="test" vertical="middle" />

## Test Case
Create an available appointment.

## Requirements
* An appointment module.
* The available status need to be enabled for the module.

## Test Data
### Attributes

#### startTime <Badge text="time" vertical="middle" />
The start time of the appointment.

#### endTime <Badge text="time" vertical="middle" />
The start time of the appointment.

#### provider <Badge text="string" vertical="middle" />
The provider to select from the dropdown.

#### types <Badge text="string" vertical="middle" />
The appointment types to select. See [NameValuePair](../model/name-value-pair).

The name is the appointment type's display name that's seen on the appointment overview page.
The value is the appointment type's ID, which'll be used to select its respective checkbox.

#### mode <Badge text="string" vertical="middle" />
The mode to select from the dropdown.

#### location <Badge text="string" vertical="middle" />
The location to select from the dropdown.

#### location <Badge text="string" vertical="middle" /> <Badge text="string" vertical="middle" /> <Badge text="location must be 'Other'" type="error" vertical="middle" />
The other location.

#### location <Badge text="boolean" vertical="middle" />
Whether the appointment is a scheduled drop-in.

``` json
[
  {
    "startTime": "09:00",
    "endTime": "10:00",
    "provider": "Herbert D'Amato",
    "types": [
      {
        "name": "Alumni Employment Service",
        "value": "37"
      }
    ],
    "mode": "In Person",
    "location": "Other",
    "locationOther": "151 John St S, Hamilton, ON L8N 2C3",
    "scheduledDropIn": true
  }
]
```

