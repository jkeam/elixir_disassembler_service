const chai    = require("chai");
const expect  = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

// use null logger
const winston = require('winston');
const logger  = new (winston.Logger)({
  transports: []
});

const Disassembler = require("../app/lib/disassembler");

describe("Disassembler", function() {
  const disassembler = new Disassembler({logger, guid: '232'});

  it("can disassemble", function(done) {
    const code = `defmodule Hello do
  def world do
    IO.puts "Hello World"
  end
end`;

    disassembler.disassemble({code}).then((obj) => {
      expect(obj.result).to.not.be.null;
      done();
    }).catch((e) => {
      done(e);
    })
  });

  it("can handle errors", function(done) {
    const code = `this is not valid code`;

    disassembler.disassemble({code}).then((obj) => {
      expect(obj.result).to.not.be.null;
      done();
    }).catch((e) => {
      done(e);
    })
  });

});
