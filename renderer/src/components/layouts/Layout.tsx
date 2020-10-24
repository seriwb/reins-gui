import * as application from '../../constants/application';
import { Header } from './Header';

import Head from 'next/head';

type Props = {
  title?: string;
};

export const Layout: React.FC<Props> = ({ children, title = application.TITLE }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <div>
        <div className="page-container">
          <Header />
          <main role="main" className="main-content bgc-grey-100">
            {/* TODO:ここらへんにエラーメッセージの表示のやつ */}
            <div id="mainContent">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};
