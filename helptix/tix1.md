# PROJECT ISSUE TICKET

Hooking up auth. Getting a 404 error on POST. Can't find the disconnection.

## Unexpected Behavior

When submitting the login credential I get a 404 error.

## Expected Behavior

To be logged in or at least get a response.

## Attempted Resolution

I've spent too much time trying to figure this out. To me it seems like axios is running a post with login_params on the client side, but can't seem to find the route on the backend? So I don't get a response, I get a 404 error.
