module.exports = {
  'Demo test Reaction Store Front' : function (browser) {
    const searchPage = browser.page.searchPage();
    const searchResults = browser.page.searchResults();

    searchPage
      .navigate()
      .searchAndSubmit('nightwatch');

    searchResults
      .verifyResultsContain('Nightwatch');

    browser
      .end();
  }
};  