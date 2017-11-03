import { BookPage } from './app.po';

describe('book App', () => {
  let page: BookPage;

  beforeEach(() => {
    page = new BookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
