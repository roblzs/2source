import React from "react";
import Head from "next/head";
import { PageComponent } from "../types/PageComponent";
import Navigation from "../components/navigation/Navigation";

export interface PageModuleProps {
  title?: string;
  description: string;
  children?: React.ReactNode;
}

const PageModule: PageComponent<PageModuleProps> = ({
  title = "",
  description = "",
  children,
}) => {
  return (
    <main>
      <Head>
        <title>{`2source${title ? ` - ${title}` : ""}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {children}
    </main>
  );
};

export default PageModule;
