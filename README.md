# Qwik SSG Link demonstration
## Explanation
This project has two pages "/" and "/second".
I have configured the adapters to use SSG only on "/" and regular SSR on "/second".
### What I expect to happen:
1. I open one of the pages -> Rendered on the server. Either the rerendered page for "/" or the new generated page for "/second". (Indicated by "This page is server rendered")
2. I click the link to the other page using the link. -> JS is loaded to navigate on the client side. (Indicated by "This page is client rendered")
3. I navigate back to my initial chosen page using the link. -> JS is loaded to navigate on the client side. (Indicated by "This page is client rendered")

### What actually happens:
Only the case when first opening "/"
1. I open "/". -> Loads rerendered page for "/". (Indicated by "This page is server rendered")
2. I navigate to "/second" using the link. -> The second page is loaded completely from the server. (Indicated by "This page is server rendered")
3. I navigate back to "/" using the link. -> The first page is loaded on the client. (Indicated by "This page is client rendered")


## Build and serve
1. Install dependencies
2. Run `npm run build` or `bun run build`
3. Run `npm run build.server.engine` or `npm run build.server.engine`, replacing engine with either
   - fastify
   - bun
   - deno
   - express
4. Run the server using `npm run serve.engine` or `bun run serve.engine`, again replacing engine with with the one you chose when building. 