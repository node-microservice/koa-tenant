const httpError = require('http-errors'),
  rc = require('rc');

module.exports = function() {
  const tenants = rc('tenants');

  return function* (next) {
    const tenantId = this.auth && this.auth.tenantId ?
      this.auth.tenantId : this.subdomains.join('-');

    if (tenantId === undefined || tenantId === null || tenantId === '') {
      throw new httpError.BadRequest('no tenant id');
    }

    const tenant = tenants[tenantId];

    if (tenant === undefined || tenant === null) {
      throw new httpError.BadRequest(`tenant not found: ${tenantId}`);
    }

    this.tenant = tenant;
    yield* next;
  };
};
