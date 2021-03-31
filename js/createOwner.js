$('#owners-create-form').on('submit', async (event) =>{
    event.preventDefault();
    const firstName = $('#firstName').val();
    if(!firstName) {
        $('#firstName').addClass('is_invalid');
        return;
    } else {
        $('#firstName').removeClass('is_invalid');
    }
    const lastName = $('#lastName').val();
    if(!lastName) {
        $('#lastName').addClass('is_invalid');
        return;
    } else {
        $('#lastName').removeClass('is_invalid');
    }
    const email = $('#email').val();
    if(!email) {
        $('#email').addClass('is_invalid');
        return;
    } else {
        $('#email').removeClass('is_invalid');
    }
    const phone = $('#phone').val();
    if(!phone) {
        $('#phone').addClass('is_invalid');
        return;
    } else {
        $('#phone').removeClass('is_invalid');
    }
    const address = $('#address').val();
    if(!address) {
        $('#address').addClass('is_invalid');
        return;
    } else {
        $('#address').removeClass('is_invalid');
    }

    const data = await fetch('http://localhost:8000/api/owners/create/', {
        method: "POST",
        headers: {
            Authorization : 'Token 3f51592dbbd7382dbc72056741b9e1201ad92404',
            "Content-Type" : 'application/json',
        },
        body: JSON.stringify({
            first_name : firstName,
            last_name : lastName,
            email,
            phone,
            address,
        })
    })
    const json = await data.json();

    window.location.href = '/';
})