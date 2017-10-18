import { LabCouchbasePage } from './app.po';

describe('lab-couchbase App', () => {
  let page: LabCouchbasePage;

  beforeEach(() => {
    page = new LabCouchbasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
