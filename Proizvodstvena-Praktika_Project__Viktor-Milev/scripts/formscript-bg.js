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
        alert('Въвели сте невалиден телефонен номер! Моля, опитайте отново.');
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
        alert('Не сте се съгласили с нашите условия за поверителност! Моля, опитайте отново.');
        return false;
    }
}