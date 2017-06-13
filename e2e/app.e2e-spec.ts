import { Session03Page } from './app.po';

describe('session03 App', () => {
  let page: Session03Page;

  beforeEach(() => {
    page = new Session03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
