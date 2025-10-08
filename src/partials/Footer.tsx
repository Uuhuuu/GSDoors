import { /* FooterCopyright,  */ Section } from "astro-boilerplate-components";

// import { AppConfig } from "@/utils/AppConfig";

const Footer = () => (
  <Section>
    <hr className="border-t border-gray-200 dark:border-gray-700 my-4" />
    {/* <FooterCopyright site_name={AppConfig.author} /> */}
  </Section>
);

export { Footer };
