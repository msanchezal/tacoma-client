import { ALTacoma, AlTacomaClientInstance } from '../src/index';
import { expect, assert } from 'chai';
import { describe, before } from 'mocha';
import * as sinon from 'sinon';

const serviceName = 'tacoma';

afterEach(() => {
  sinon.restore();
});
describe('Tacoma Client Test Suite:', () => {
  describe("Something", () => {
      it("should work", () => {
          expect( true ).to.equal( true );
      } );
  } );
  xdescribe('when exporting saved views', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(ALTacoma['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await ALTacoma.exportSavedViewReport('1234', '7890', '5678');
      expect(stub.callCount).to.equal(1);
    });
  });
  xdescribe('when getting saved views', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(ALTacoma['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await ALTacoma.getSavedView('1234', '7890', '5678');
      expect(stub.callCount).to.equal(1);
    });
  });
  xdescribe('when exporting views', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(ALTacoma['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await ALTacoma.exportViewReport('1234', '7890', '5678', '0987');
      expect(stub.callCount).to.equal(1);
    });
  });
  xdescribe('when getting views', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(ALTacoma['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await ALTacoma.getView('1234', '7890', '5678', '0987');
      expect(stub.callCount).to.equal(1);
    });
  });
  xdescribe('when exporting workbooks', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(ALTacoma['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await ALTacoma.exportWorkbookReport('1234', '7890', '5678', 'pdf');
      expect(stub.callCount).to.equal(1);
    });
  });
  xdescribe('when getting workbook preview', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(ALTacoma['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await ALTacoma.getWorkbookPreview('1234', '7890', '5678');
      expect(stub.callCount).to.equal(1);
    });
  });
  xdescribe('when getting workbook', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(ALTacoma['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await ALTacoma.getWorkbook('1234', {filter_subscriptions: 'true'});
      expect(stub.callCount).to.equal(1);
    });
  });

});
