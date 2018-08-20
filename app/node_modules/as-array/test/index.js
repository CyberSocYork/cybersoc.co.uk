var expect = require('chai').expect;
var asArray = require('../');

describe('as-array', function() {
  it('should work', function() {
    expect(asArray('a')).to.eql(['a']);
    expect(asArray(['a'])).to.eql(['a']);
    expect(asArray(undefined)).to.eql([]);
    expect(asArray()).to.eql([]);
    expect(asArray(null)).to.eql([null]);
    expect(asArray(['a', 'b'])).to.eql(['a', 'b']);
  });
});