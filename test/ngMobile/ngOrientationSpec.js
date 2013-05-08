'use strict';

describe('ngMotion (mobile)', function() {

  beforeEach(function() {
    module('ngMobile');
  });


    it('should delegate functions to $browser.defer', inject(function($timeout, $browser,$orientation) {
        var counter = 0;
        $timeout(function() { counter++; });

        expect(counter).toBe(0);

        $browser.defer.flush();
        expect(counter).toBe(1);

        expect(function() {$browser.defer.flush();}).toThrow('No deferred tasks to be flushed');
        expect(counter).toBe(1);

        $orientation.a();

    }));

});
