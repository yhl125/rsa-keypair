keypair = require('keypair');
fs = require('fs');

function main() {
      const pair = keypair();
      fs.writeFileSync("keys/public.pem", pair.public);
      fs.writeFileSync("keys/private.pem", pair.private);
}

main()