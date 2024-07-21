import {
  Body,
  Column,
  Head,
  Heading,
  Html,
  Row,
  Section,
} from "@react-email/components";

const Email = () => {
  return (
    <Html>
      <Head />
      <Body style={{ ...main, maxWidth: 700, margin: "auto" }}>
        <Heading style={mainTitle}>Email from website</Heading>
        <Section style={content}>
          <Row style={{ ...boxInfos }}>
            <Column style={{ fontWeight: 600, paddingRight: 20 }}>From:</Column>
            <Column>Jonathan Pereira</Column>
          </Row>
          <Row style={{ ...boxInfos }}>
            <Column style={{ fontWeight: 600, paddingRight: 20 }}>
              Message:
            </Column>
            <Column>
              klmsdkcm snmdv nmksd jkopskdcoskcop kowsdckopscko skposckop
              skopsckopc
            </Column>
          </Row>
        </Section>
      </Body>
    </Html>
  );
};

export default Email;

const main = {
  backgroundColor: "#eafbff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const mainTitle = {
  padding: "40px",
  textAlign: "center",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px",
};
