$(document).ready(function () {
    $('#button').click(
        function () {
            var toAdd = $('input[name=listItem]').val();
            $('ul').append('<li>' + toAdd + '</li>')

        }
    )
    $(document).on('dblclick', 'li', function () {
        $(this).toggleClass('strike').fadeOut('slow')
    })
    $('input').focus(function () {
        $(this).val(' ')
    })


})