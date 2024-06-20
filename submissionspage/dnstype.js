const domainstoprocess = require('./submitdomains.json'); //get domains that are not processed yet.

export class subdomaintype {
Constructor(owner,dns,target) {
this.owner = owner;
this.dns = dns;
this.target = target;
}
}