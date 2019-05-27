define(['custom_module'], function (customModule) {
    describe('just checking', function () {
        it('works for require', function () {
            assert(window.test_function().value
                == 'this is some value in object from custom module',
                'text should match');
        })
    });
})