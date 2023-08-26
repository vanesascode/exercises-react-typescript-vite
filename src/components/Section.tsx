import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
    <section>
      <h4>{title}</h4>
      <p>{children}</p>
    </section>
  );
};

export default Section;
