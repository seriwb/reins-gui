import Link from 'next/link';
import { Layout } from '../components/layouts';

import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
