RocketShop.Products = new Mongo.Collection("products");

RocketShop.Products.bySku = function(sku){
  return RocketShop.Products.findOne({sku : sku});
};

RocketShop.Products.featured = function(){
  var featuredSkus = ["honeymoon-mars","johnny-liftoff","one-way-reentry"];
  return RocketShop.Products.find({sku : {$in : featuredSkus}},
    {fields : {inventory : false, cost : false}});
};

RocketShop.Products.allow({
  update : function(userid, product){
    return isAdmin();
  },
  insert : function(userid, product){
    return isAdmin();
  },
  remove : function(userid, product){
    return isAdmin();
  }
});


