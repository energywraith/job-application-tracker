import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import ActionLink from "components/ActionLink";

import Form from "./Form";

const ContentBox = ({
  title,
  submitText,
  submittingText,
  fields,
  validationSchema,
  footerText,
  footerActionLinkText,
  footerActionLinkHref,
  onSubmit,
}) => {
  return (
    <>
      <Heading as="h1" size="2xl" textShadow="0.3px 0.3px 3px blackAlpha.600">
        {title}
      </Heading>
      <Box mt={9} maxWidth={400}>
        <Form
          fields={fields}
          submitText={submitText}
          submittingText={submittingText}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      </Box>
      <Heading
        as="h2"
        mt={12}
        size="sm"
        textShadow="0.3px 0.3px 3px rgba(0, 0, 0, 0.2)"
        color="whiteAlpha.900"
      >
        <Flex>
          <Text mr={1}>{footerText}</Text>
          <ActionLink
            to={footerActionLinkHref}
            textContent={footerActionLinkText}
          />
        </Flex>
      </Heading>
    </>
  );
};

export default ContentBox;
