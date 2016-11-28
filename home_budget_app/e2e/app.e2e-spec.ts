import { HomeBudgetAppPage } from './app.po';

describe('home-budget-app App', function() {
  let page: HomeBudgetAppPage;

  beforeEach(() => {
    page = new HomeBudgetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
