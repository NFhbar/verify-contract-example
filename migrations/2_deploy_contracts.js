const Ballot = artifacts.require('Ballot.sol')

const _numProposals = 3

module.exports = function(deployer) {
    deployer.deploy(Ballot, _numProposals)
}
