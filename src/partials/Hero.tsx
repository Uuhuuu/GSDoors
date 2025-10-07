import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Welcome to <GradientText>GS Doors</GradientText>
        </>
      }
      description={
        <>
          Our mission is simple: to ensure that premium quality and excellent
          value go hand-in-hand, making it easy for you to find the perfect door
          for your home or project. <br />
          Make sure to follow our{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            Facebook
          </a>{" "}
          or{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            Instagram
          </a>{" "}
          for more information and latest products.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/door-icon-10431.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial src="/assets/images/ig.png" alt="Instagram icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/fb.png" alt="Facebook icon" />
          </a>
          {/*           <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
