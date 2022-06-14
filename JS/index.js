$(document).ready(function(){
    // event.defaultPrevented();
    $('form').validate({
        rules : {
            fname : {
                required : true,
                minlength : 3,
                latters_only:true
            },
            lname : {
                required : true,
                minlength : 3,
                latters_only:true
            },
            staddress : {
                required : true,
                minlength : 3,
                address:true
            },
            staddress2 : {
                required : true,
                minlength : 3,
                address:true
            },
            city : {
                required : true,
                minlength : 3,
                latters_only : true
            },
            state : {
                required : true,
                minlength : 3,
                latters_only :true
            },
            zipcode : {
                required : true,
                minlength : 6,
                maxlength : 6,
                zipcode:true
            },
            phone : {
                required : true,
                minlength : 6,
                phone :true
            },
            email : {
                required : true,
                minlength : 3,
                email : true,
            },

            feedback : {
                required : true,
                minlength : 3,
                feedback : true,
            },
            suggest : {
                required : true,
                minlength : 3,
                suggest : true,
            },
            gender : {
                required : true
            }
        },
        errorPlacement : function(error, element){
            if(element.attr("name") == "gender"){
                error.insertAfter('#here');
            }
            else{
                error.insertAfter(element)
            }
        }
    });
    $.validator.addMethod('latters_only', function (value) { 
        return /^[a-zA-Z]*$/.test(value); 
    }, 'The field can only contains letters');
    $.validator.addMethod('address', function (value) { 
        return /^[\w',-\\/.\s]*$/.test(value); 
    }, 'Invalid Address');
    $.validator.addMethod('zipcode', function (value) { 
        return /[0-9]{6}$/.test(value); 
    }, 'Invalid Zip-code');
    $.validator.addMethod('phone', function (value) { 
        return /\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/.test(value); 
    }, 'Phone Number should be of given format');
    

});