var component = require("~/app/home/item/items.component");

describe("Hello world", function() {
  var itemsComponent;
  beforeEach(function() {
    itemsComponent = new component.ItemsComponent();
  });
  it("returns Hello worrld", function(){
  expect(itemsComponent.helloWorld()).toEqual("Hello world!");
  });
});



