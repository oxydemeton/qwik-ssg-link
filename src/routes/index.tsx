import { component$ } from "@builder.io/qwik";
import { Link, useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { isServer } from "@builder.io/qwik/build";

export default component$(() => {
  const nav = useNavigate()
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        root/first page
        <br />
        This page is {isServer? "server": "client"} rendered.
        <br />
        When you first load this page it should be server rendered. When navigating here I expect client navigation.
        <br />
        <Link href="/second">Link To Second Page</Link>
        <br />
        <button onClick$={()=>nav("/second")}>Button to second page</button>
        <br />
        <a href=".">Full Reload Link</a>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
