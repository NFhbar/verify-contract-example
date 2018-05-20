const Ballot = artifacts.require('Ballot')

contract('Ballot - Contract Deployment', accounts => {
    let ballot
    const _numProposals = 3

    describe('Deploys Correctly', async () => {
        beforeEach(async () => {
            ballot = await Ballot.new(_numProposals)
            assert.ok(ballot)
        })
        it('Ballot contract', async () => {
          assert.ok(ballot)
        })
    })
})
