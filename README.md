# @microservice/koa-tenant

Set a tenant context for a request either from context.auth or the subdomain. The configuration comes from `rc` for the time being.

## Future

Should support looking up a tenant identifier *from* the hostname, and then getting configuration from somewhere other than rc (i.e. Consul).
