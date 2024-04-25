
//this function parses a URL parameter of the form experiment.html?condition=
function get_url_param(name, defaultValue) { 
    var regexS = "[\?&]"+name+"=([^&#]*)"; 
    var regex = new RegExp(regexS); 
    var tmpURL = window.location.href; 
    var results = regex.exec(tmpURL); 
    if( results == null ) { 
        return "hi"; 
    } else { 
        return results[1];    
    } 
}
function set_slider() {
    $('#jspsych-html-slider-response-response').slider();
    
    // hide slider handles, disable button
    // assuming you're using jsquery ui
    $('.ui-slider-handle').hide();
    $('#jspsych-html-slider-response-next').prop('disabled', true);
    
    // add step
    var step = $( "#jspsych-html-slider-response-response" ).slider( "option", "step" );
    $( "#jspsych-html-slider-response-response" ).slider( "option", "step", 10 );

    // adding min and max values 
    var min = $( "#jspsych-html-slider-response-response" ).slider( "option", "min" );
    $( "#jspsych-html-slider-response-response" ).slider( "option", "min", 0 );
    var max = $( "#jspsych-html-slider-response-response" ).slider( "option", "max" );
    $( "#jspsych-html-slider-response-response" ).slider( "option", "max", 100 );
    

    // add click event
    $('#jspsych-html-slider-response-response').slider().on('slidestart', function() {
        // show handle
        $(this).find('.ui-slider-handle').show();
        $('#jspsych-html-slider-response-next').prop('disabled', false);
    });
}
  