import React from "react";

import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  console.log("error page");
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured.</h1>
        <p>Could not find this page.</p>
      </main>
    </>
  );
}

export default ErrorPage;
