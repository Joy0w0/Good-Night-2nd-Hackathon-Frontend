import { styled } from 'styled-components';

type ButtonProps = {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
};

export default function Button({ title, onClick }: ButtonProps) {
  return <Btn onClick={onClick}>{title}</Btn>;
}

const Btn = styled.button`
  /* 글자 */
  color: #fff;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  /*네모 박스*/
  padding: 0.8rem 3rem;
  border-radius: 5rem;
  background: #2c2c2c;
  display: inline-block;
  &:not(:last-child) {
    margin-right: 1.75rem;
  }
  &:hover {
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
  }
`;
