import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { isServer } from "@builder.io/qwik/build";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Second page
        <br />
        This page {isServer? "server": "client"} rendered
        <br />
        Happy coding.
        <br />
        <Link href="/">To root/first Page</Link>
      </div>
    </>
  );
});