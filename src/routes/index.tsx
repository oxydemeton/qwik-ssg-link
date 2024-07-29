import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { isServer } from "@builder.io/qwik/build";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        root/first page
        <br />
        This page {isServer? "server": "client"} rendered
        <br />
        Happy coding.
        <br />
        <Link href="/second">To Second Page</Link>
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
