import { Ng4CompleteAppPage } from './app.po';

describe('ng4-complete-app App', () => {
  let page: Ng4CompleteAppPage;

  beforeEach(() => {
    page = new Ng4CompleteAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
