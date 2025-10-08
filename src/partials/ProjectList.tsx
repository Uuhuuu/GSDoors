import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from "astro-boilerplate-components";

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Contact</GradientText>
      </>
    }
  >
    {/* Invitation / contact intro */}
    <p className="mb-5 text-xl text-gray-700 dark:text-gray-300">
      If you would like to buy products or ask about selling items, please
      contact us using one of the methods below:
    </p>

    <div className="flex flex-col gap-6 text-xl">
      {/* Phone contact */}
      <Project
        name="Phone"
        description="+48 123 456 789"
        link="tel:+48123456789"
        img={{
          src: "/assets/images/phone1.png",
          alt: "Contact Phone",
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Call</Tags>
            <Tags color={ColorTags.SKY}>WhatsApp</Tags>
          </>
        }
      />

      {/* Address / location */}
      <Project
        name="Address"
        description="Main Street 12, 00-000 Warsaw, Poland"
        link="https://www.google.com/maps/search/?api=1&query=Main+Street+12+Warsaw"
        img={{ src: "/assets/images/project-maps.png", alt: "Location Map" }}
        category={
          <>
            <Tags color={ColorTags.INDIGO}>Visit</Tags>
            <Tags color={ColorTags.EMERALD}>Pickup</Tags>
          </>
        }
      />

      {/* Email contact */}
      <Project
        name="E-mail"
        description="seller@example.com"
        link="mailto:seller@example.com"
        img={{ src: "/assets/images/email.png", alt: "Contact Email" }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>E-mail</Tags>
            <Tags color={ColorTags.VIOLET}>Support</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
