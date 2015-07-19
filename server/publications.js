Meteor.publish("featured-products", function(){
  return RocketShop.Products.featured();
});

Meteor.publish("vendors", function(){
  return Vendors.find();
});

Meteor.publish("products-by-vendor", function(slug){
  check(slug, String);
  return RocketShop.Products.find({"vendor.slug" : slug})
});

Meteor.publish("products-by-sku", function(sku){
  check(sku, String);
  return RocketShop.Products.find({sku : sku});
});

Meteor.publish("cart", function(key){
  check(key, String);
  return Carts.find({userKey : key});
});
