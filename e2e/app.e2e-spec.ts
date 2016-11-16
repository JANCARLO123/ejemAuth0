import { EjemAuth0Page } from './app.po';

describe('ejem-auth0 App', function() {
  let page: EjemAuth0Page;

  beforeEach(() => {
    page = new EjemAuth0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
