$(function(){
  var total = $("#total");
  var val = 0;
  chrome.storage.sync.get(["total"], function(budget){
    if(budget.total) {
      total.text(budget.total);
      val = budget.total;
    }
    else {
      total.text(0);
    }
  });

  $(".btn").click(function(){
    var amount = $("#inp");
    if(amount.val())
    {
      val += parseInt(amount.val());
    }

    chrome.storage.sync.set({"total" : val}, function(){
      total.text(val);
      amount.val('');
    });

  });
});
