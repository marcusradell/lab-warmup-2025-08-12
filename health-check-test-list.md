# Test List for Health Check Endpoint

- [x] Test that server responds with 200 OK and "alive: true" when server is running
- [ ] Test that server responds with 200 OK and "ready: true" when server is ready
- [ ] Test that server responds with 503 Service Unavailable and "ready: false" when server is not ready
- [ ] Test that server responds with 503 Service Unavailable and "alive: false" when server is shutting down
- [ ] Test that server shuts down gracefully when receiving SIGTERM signal
- [ ] Test that in-flight requests complete during graceful shutdown
- [ ] Test that new requests are rejected during shutdown with appropriate status code
