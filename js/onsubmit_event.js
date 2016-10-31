function ValidationEvent() {
  var coupon = document.getElementById("couponcode").value;
  return coupon == "beta10";
}

function Change() {
  if (ValidationEvent()){
    document.getElementById("FinalAmount").innerHTML = "€9.90";
}
}


