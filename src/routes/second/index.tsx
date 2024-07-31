import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { isServer } from "@builder.io/qwik/build";

export default component$(() => {
  const nav = useNavigate()
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Second page
        <br />
        This page is {isServer? "server": "client"} rendered.
        <br />
        When you first load this page it should be server rendered. When navigating here I expect client navigation.
        <br />
        Happy coding.
        <br />
        <Link href="/">Link To root/first Page</Link>
        <br />
        <button onClick$={()=>nav("/")}>Button to root/first page</button>
        <br />
        <a href=".">Full Reload Link</a>
      </div>
    </>
  );
});