const stubLocation = require('../support/stubLocation')


describe('successfully displays', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.route({
      method: "POST",
      url: "https://newsroom3api.herokuapp.com/api/v1/auth/sign_in",
      response: { session: { location: { latitude: 57.72, longitude: 11.93 }, edition: "Gothenburg" } }
    })
    cy.visit("/", stubLocation({ latitude: 57.72, longitude: 11.93 }));
  
  });

  it("display local weather conditions and time", () => {
    cy.get("#weather-header");
    cy.get("#city").should("contain", "Gothenburg");
    cy.get("#temperature").should("contain", "5");
    cy.get("#condition").should("contain", "cloudy");
    cy.get("#wind").should("contain", "25 km");
    cy.get("#timezone").should("contain", "GMT+2");
  })
})
