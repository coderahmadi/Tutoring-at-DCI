## Middleware are functions that have access to the request & response cycle of the express app.

- they can change the request and response object.
- they can execute any code.
- end the request response cycle.
- move to the next middleware function in stack.

if these function can not finish the req-res cycle, we need to pass control to the next middleware function in stack.

Application level Middleware and Router level Middleware are called using `app.use()` and `app.METHODS`
