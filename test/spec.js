var chai = require('chai')
var should = chai.should()
var chooseWithinString = require('../dist/bundle.js')

describe('chooseWithinString', function () {

  it('should not affect strings without options', function () {
    chooseWithinString('hi', 0).should.equal('hi')
    chooseWithinString('hi', 1).should.equal('hi')
    chooseWithinString('hi', 2).should.equal('hi')
  })

  it('should select from two options', function () {
    chooseWithinString('You have won $10/100!', 0).should.equal('You have won $10!')
    chooseWithinString('You have won $10/100!', 1).should.equal('You have won $100!')
  })

  it('should process multiple selections', function () {
    chooseWithinString('You have won $1/1,000,000. That\s a little/lot!', 1).should.equal('You have won $1,000,000. That\s a lot!')
  })

  it('should select from three options', function () {
    chooseWithinString('You have won $10/100/1,000!', 0).should.equal('You have won $10!')
    chooseWithinString('You have won $10/100/1,000!', 1).should.equal('You have won $100!')
    chooseWithinString('You have won $10/100/1,000!', 2).should.equal('You have won $1,000!')
  })

  it('should throw an error if n > available options', function () {
    (function() {
      chooseWithinString('You have won $10/100/1,000!', 3)
    }).should.throw(Error)
  })

  it('should include quotes and dashes', function () {
    chooseWithinString('Tom\'s Cabin/two', 0).should.equal('Tom\'s Cabin' )
    chooseWithinString('one-and/two', 0).should.equal('one-and' )
  })

  it('should ignore slashes surrounded by spaces', function () {
    chooseWithinString('one / two', 0).should.equal('one / two' )
  })

  it('should ignore ending punctuation', function () {
    chooseWithinString('one/two.', 0).should.equal('one.' )
    chooseWithinString('one/two,', 0).should.equal('one,' )
    chooseWithinString('one/two;', 0).should.equal('one;' )
  })

  it('should replace underscores with spaces', function () {
    chooseWithinString('Now you are poor/happy/a_millionaire!', 2).should.equal('Now you are a millionaire!')
  })

  // it('should support alternative delimeters', function () {
  //   chooseWithinString('You have won $10-100-1,000!', 0, '-').should.equal('You have won $10!')
  // })
})
