$(document).ready(function() {
});

function openShopPayModal() {
  document.getElementsByTagName('shopify-payment-terms')[0].shadowRoot.querySelector('shop-pay-installments-banner').shadowRoot.querySelector('#shopify-installments-cta').click();
}

function openKlarnaModal(p1, p2) {
  document.getElementsByTagName('klarna-placement')[0].firstChild.shadowRoot.querySelector('button').click();
}