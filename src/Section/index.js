import { Section, SectionHeader, SectionTitle, SectionTasks } from "./styled";

const AppSection = ({ title, body, extraHeaderContent }) => (
  <Section>
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </SectionHeader>
    <SectionTasks>
      {body}
    </SectionTasks>
  </Section>
);

export default AppSection;