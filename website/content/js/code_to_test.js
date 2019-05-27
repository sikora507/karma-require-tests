(function(){
    console.log('This is the code to test which uses requirejs.')
    var customMod = null;
    require(['custom_module'], function(customModule){
        customMod = customModule;
        console.log('This is an object returned by requirejs module:');
        console.log(customMod);
    });
    // we need to test if this function will return object retrieved by requirejs.
    window.test_function = window.test_function || function() {
        return customMod;
    };
})();