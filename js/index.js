$(document).ready(function() {
                    
    var options = {
        html: true,
        content: $('[data-name="popover-content"]'),
        placement: 'bottom',
        customClass: 'popover-menu'
    }
    var exampleEl = document.getElementById('example')
    var popover = new bootstrap.Popover(exampleEl, options)
})
