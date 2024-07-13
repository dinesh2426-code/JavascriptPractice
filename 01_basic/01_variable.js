const accountId = 144
let accountEmail = "dinesh@gamail,com"
var accountPassword = "12345"
accountCity = "Jalna"

// accountId = 2   not allowed
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])

// prefer not to use  var because of issue of block scope and funcctional scope 