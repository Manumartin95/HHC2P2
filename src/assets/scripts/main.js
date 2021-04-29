/**
 * Import dependencies from node_modules
 * see commented examples below
 */
 import * as bootstrap from 'bootstrap';
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
      trigger:'hover',
      content:'El código CVV o CVC es un grupo de 3 o 4 números situado en el reverso de la tarjeta de crédito.',
      placement:'top'
  });
});

