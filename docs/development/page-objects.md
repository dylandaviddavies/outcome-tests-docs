# Page Objects
Page objects are object-representations of pages that comprise all workflows and elements of a specific page.

## Benefits

### Delegation
All actions in a test are delegated through page objects. Doing so makes it much easier to keep tests up to date. For example, when a page changes that's used by 50 tests, we only have to change the 1 page object, not the 50 tests that go through that page.

### Organization
Page objects keep our code organized. We know all elements, selectors, and labels specific to a page will be in the page object.

## Example 1: Login Page
An example of a page object for a login page.

### Page
A page with a username text field, a password text field, and a submit button.
``` html
<form>
    <label for="txtUsername">Username</label>
    <input type="text" id="txtUsername" name="txtUsername" />

    <label for="txtPassword">Password</label>
    <input type="text" id="txtPassword" name="txtPassword" />

    <button id="btnSubmit" type="submit">
        Login
    </button>
</form>
```

### Page Object
A page object with two properties for getting and setting their respective text fields and a function for submitting the form.
``` csharp
public class LoginPage {
    private readonly IWebDriver _driver;

    private IWebElement TxtUsername => _driver.FindElement(By.Id("txtUsername"));
    public string Username {
        get => TxtUsername.GetCssAttribute("value");
        set => TxtUsername.SendKeys(value);
    }

    private IWebELement TxtPassword => Driver.FindElement(By.Id("txtPassword"));
    public string Password {
        get => TxtPassord.GetCssAttribute("value");
        set => TxtPassword.SendKeys(value);
    }

    private IWebElement BtnLogin => Driver.FindElement(By.Id("btnSubmit"));

    public DashboardPage(IWebDriver driver) {
        _driver = driver;
    }
}
```