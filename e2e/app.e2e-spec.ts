import { VistexAngularPage } from './app.po';

describe('vistex-angular App', () => {
  let page: VistexAngularPage;

  beforeEach(() => {
    page = new VistexAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
