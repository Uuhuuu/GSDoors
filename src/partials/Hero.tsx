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
          Welcome to <GradientText>GSDoors</GradientText>
        </>
      }
      description={
        <>
          Our mission is simple: to ensure that premium quality and excellent
          value go hand-in-hand, making it easy for you to find the perfect door
          for your home or project. <br />
          Make sure to follow our{" "}
          <a className="text-cyan-400 hover:underline" href="https://www.facebook.com/share/17SL6wRBiN">
            Facebook
          </a>{" "}
          or{" "}
          <a className="text-cyan-400 hover:underline" href="https://www.instagram.com/gsdoors_?igsh=dTFrczJmZ2VpOGJl">
            Instagram
          </a>{" "}
          for the latest updates and new products.
        </>
      }
      avatar={
        <div className="inline-block rounded-lg overflow-hidden border-4 border-white shadow-lg">
          <img
            className="h-80 w-64 object-cover"
            src="/assets/images/door-icon.jpg"
            alt="Drzwi – Twój sklep GS Doors"
            loading="lazy"
          />
        </div>
      }
      socialButtons={
        <>
          <a
            className="mx-3 pb-5"
            href="https://www.facebook.com/share/17SL6wRBiN"
          >
            <HeroSocial src="/assets/images/fb.png" alt="Facebook icon" />
          </a>
          <a
            className="mx-3 pb-5"
            href="https://www.instagram.com/gsdoors_?igsh=dTFrczJmZ2VpOGJl"
          >
            <HeroSocial src="/assets/images/ig2.png" alt="Instagram icon" />
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
