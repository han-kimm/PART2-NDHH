import styled from "styled-components";
import PropTypes from "prop-types";
import { FONT14, FONT18, FONT20, FONT20B } from "@/styles/FontStyles";
import Badge from "@/components/commons/Badge";
import { formatDate } from "@/utils/formatDate";

Modal.propTypes = {
  profileImageURL: PropTypes.string,
  sender: PropTypes.string,
  relationship: PropTypes.string,
  createdAt: PropTypes.string,
  content: PropTypes.string,
};
function Modal({ profileImageURL, sender, relationship, createdAt, content }) {
  return (
    <Container>
      <Wrapper>
        <Contents__profile>
          <img src={profileImageURL} />
          <p>From.</p>
          <h1>{sender}</h1>
          <Badge>{relationship}</Badge>
        </Contents__profile>
        <Contents__date>
          <p>{formatDate(createdAt)}</p>
        </Contents__date>
      </Wrapper>
      <CutLine />
      <Text>{content}</Text>
    </Container>
  );
}

export default Modal;

const Container = styled.div`
  width: 60rem;
  height: 48rem;

  padding: 4rem;
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  background-color: var(--White);

  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Contents__profile = styled.div`
  display: grid;
  grid-template: auto auto / auto 1.6rem auto auto;
  grid-template-areas: "img . from who" "img . badge .";

  row-gap: 0.6rem;

  img {
    width: 5.6rem;
    height: 5.6rem;

    grid-area: img;

    border-radius: 10rem;

    object-fit: cover;
  }

  p {
    grid-area: from;

    ${FONT20};
  }

  h1 {
    grid-area: who;

    margin-left: 0.8rem;

    ${FONT20B};
  }
`;

const Contents__date = styled.div`
  p {
    ${FONT14}
    color: var(--Gray4);
  }
`;

const CutLine = styled.div`
  width: 52rem;
  height: 0.1rem;

  margin-top: 2rem;
  margin-bottom: 1.6rem;

  background-color: var(--Gray2);
`;

const Text = styled.p`
  width: 50rem;
  height: 24rem;

  padding-right: 1rem;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    min-height: 5rem;

    border-radius: 0.8rem;

    background-color: var(--Gray3);
  }

  ${FONT18};
`;
