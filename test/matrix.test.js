const sinon = require('sinon');
let expect;
const Matrix = require('../gauss_js/matrix');

describe('Matrix Mock Methods', () => {
    before(async () => {
        expect = (await import('chai')).expect;
    });

    let mockMatrix;

    beforeEach(() => {
        mockMatrix = new Matrix(1);
    });

    it('should call the set method', () => {
        const mockSet = sinon.spy(mockMatrix, 'set');
        console.log(mockMatrix)
        mockMatrix.set(0, 0, 3);
        expect(mockSet.calledOnce).to.be.true;
    });

    it('should mock the gauss method', () => {
        const mockRows = sinon.stub(mockMatrix, 'get_rows').returns(1);
        const result = mockMatrix.get_rows();
        expect(result).to.deep.equal(1);
        expect(mockRows.calledOnce).to.be.true;
    });
});