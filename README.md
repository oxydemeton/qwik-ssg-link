# Qwik SSG Link demonstration
## Explanation
This project has two pages "/" and "/second".
I have configured the adapters to use SSG only on "/" and regular SSR on "/second".
### What I expect to happen:
1. I open one of the pages -> Rendered on the server. Either the prerendered page for "/" or the new generated page for "/second". (Indicated by "This page is server rendered")
2. I navigate other page using the link. -> JS is loaded to navigate on the client side. (Indicated by "This page is client rendered")
3. I navigate back to my initial chosen page using the link. -> JS is loaded to navigate on the client side. (Indicated by "This page is client rendered")

### What actually happens:
Only the case when first opening "/"
1. I open "/". -> Loads rerendered page for "/". (Indicated by "This page is server rendered")
2. I navigate to "/second" using the link. -> The second page is loaded completely from the server. (Indicated by "This page is server rendered")
3. I navigate back to "/" using the link. -> The first page is loaded on the client. (Indicated by "This page is client rendered")
Note: On stackblitz service workers do not work and such all pages are always loaded by the server. 

## Build and serve
1. Install dependencies
2. Run `npm run build` or `bun run build`
3. Run `npm run build.server.engine` or `npm run build.server.engine`, replacing engine with either
   - fastify
   - bun
   - deno
   - express
4. Run the server using `npm run serve.engine` or `bun run serve.engine`, again replacing engine with with the one you chose when building.

## Static side generation
Building the page static using `npm run build.server.static` after the client build results in the bug occurring on all navigation.

## The button
The navigation buttons use the `useNavigation` hook and always use client side navigation in all cases even when using the static side and represent the behavior I also expect from links.


# FIX
Just add the correct origin, including the port, into the adapter ssg config. This will fix the entire issue.