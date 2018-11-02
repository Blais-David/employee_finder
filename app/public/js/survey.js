$(function() {
    const validateForm = function() {
        let isValid = true;
    $('input').each(function() {
        if(!($this).val()) {
            isValid = false;
        }
    });
    $('.custom-select').each(function() {
        if(!$($this).val()) {
            isValid = false;
        }
    });
    return isValid;
    }

    const displayModel = function(data) {
        $('#match-name').text(data.name);
        $('#match-img').attr('src', data.photo);
        $('#results-model').modal('toggle');
    }

    const submit = function(event) {
        event.preventDefault();

        if (validateForm()) {

        }
    }
})