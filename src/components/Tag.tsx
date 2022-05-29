import styled from "styled-components";

import { TextLink } from "~/components/TextLink";

import { color } from "~/theme/config";

export const TagLink = styled(TextLink)`
  font-size: 0.8rem;

  background: ${color.secondary};

  padding: 0.5em 1em;

  &:hover {
    background: ${color.accent};
    color: ${color.primary};
  }
`;
