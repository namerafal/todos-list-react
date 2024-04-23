import { Section, Header, SectionTasks, SectionTitle } from "./styled";

const AppSection = ({ title, body, extraHeaderContent }) => (
  <Section>
    <Header>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </Header>
    <SectionTasks>
      {body}
    </SectionTasks>
  </Section>
);

export default AppSection;