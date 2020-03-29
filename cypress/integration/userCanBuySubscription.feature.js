describe("User can buy a subscription", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/1",
      response: "fixture:specific_premium_article.json"
    });
    cy.visit("/")
    cy.get("#article-list").within(() => {
      cy.get("#article-1");
      cy.get("#open-article").click();

    })
  })
  it("displays buy subscription form", () => {
    cy.get("button").contains("Buy Subscription").click();
    cy.get("#subscription").should("be.visible")
      .within(() => {
        cy.get('iframe[name^="__privateStripeFrame5"]')
          .then($iframe => {
            const $body = $iframe.contents().find("body")
            cy.wrap($body)
              .find('input[name="cardnumber"]')
              .type("4242424242424242")
          })

      })
  })
})