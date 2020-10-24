import Link from 'next/link';
import styled from 'styled-components';

export const Header: React.FC = () => {
  return (
    <>
      <header>
        <S_Nav>
          <div className="container">
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav mr-auto"></ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/logout">
                    <a className="nav-link">ログアウト</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </S_Nav>
      </header>
    </>
  );
};

// ------------ スタイル設定 ------------
interface WrapperProps {
  children?: React.ReactNode;
}
const Nav = ({ children }: WrapperProps) => (
  <nav className="navbar navbar-expand navbar-light bg-light">{children}</nav>
);
const S_Nav = styled(Nav)``;
