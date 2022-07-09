function newItem () {
    let newElement = $('<li></li>');
    let para = $('<h1></h1>');
    newElement.append(para);
    let value = $('#input').val();
    para.append(value);

    if (value === '') {
        return alert('You must add something');
    } else {
        $('#list').append(newElement);
    }

    newElement.on('dblclick', function (e) {
        newElement.toggleClass('strike');
    });

    let crossOut = $('<button></button>');
    let ex = $('<h3>X</h3>');
    crossOut.addClass('crossOutButton');
    crossOut.append(ex);
    para.append(crossOut);

    crossOut.on('click', function () {
        newElement.addClass('delete');
    });

    $('#list').sortable();
};