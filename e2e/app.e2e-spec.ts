import { AppPage } from './app.po';

describe('tabitha-silva-portfolio App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ts!');
  });
});
