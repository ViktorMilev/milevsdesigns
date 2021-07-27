var condCheck;


function phoneNumCheck(inputnum)
{
    var numbers = /^[0-9]+$/;
    if (inputnum.value.match(numbers))
    {
        document.formContacts.phone.focus;
        return true;
    }
    else
    {
        alert('You have entered an invalid phone number! Please try again.');
        document.formContacts.phone.focus;
        return false;
    }
}

function formValidation()
{
    if (document.formContacts.terms.checked)
    {

    }
    else
    {
        alert('You have not agreed to our terms of privacy! Please try again.');
        return false;
    }
}