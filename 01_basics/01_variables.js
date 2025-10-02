const accountId=12345
let accountEmail="Spoorthi@google.com"
var accountPassword="123489"
accountType="private"

let accountCity;

accountEmail="Yashu@google.com"
accountPassword="23467"
accountType="public"

/* 
prefer not to use var
beacause of issues in block scope and functional  scope

*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountType,accountCity])