import { PrimengOrganizationChartPage } from './app.po';

describe('primeng-organization-chart App', () => {
  let page: PrimengOrganizationChartPage;

  beforeEach(() => {
    page = new PrimengOrganizationChartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
