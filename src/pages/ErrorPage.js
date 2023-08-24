import React from "react";

import PrimaryHeader from "../components/PrimaryHeader";

function ErrorPage() {
  return (
    <>
      <PrimaryHeader />
      <main>
        <h1>An error occured.</h1>
        <p>Could not find this page.</p>
      </main>
    </>
  );
}

export default ErrorPage;
