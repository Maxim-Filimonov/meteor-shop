Template.vendorsShow.helpers({
  products : function(){
    return RocketShop.Products.find({"vendor.id" : this.id});
  }
});