const domainstoprocess = require('./submitdomains.json'); //get domains that are not processed yet.

export class imbadatnaming {
Constructor(owner,dns,target) {
this.owner = owner;
this.dns = dns;
this.target = target;
}
export function checkowners() {// i somehow need to figure out how to use classes in functions 
//buna sonra bakacağım
for (let i = 0; i < domainstoprocess.length;i++) {
if(domainstopprocess[i]==this.owner)

 }
}
}