import Head from 'next/head';
import { Fragment } from 'react';
import Layout from '../component/Layout/Layout';
import FormsContainer from '../component/FormsContainer/FormsContainer';
import db from "../utility/connectDb";
import userOrganizationDetails from "../Modal/userOrganizationDetails";

export default function Home(props) {

  console.log(props.result);

  return (
    <Fragment>
      <Head>
        <title>Hutech Assignment Test</title>
        <meta name="test"  content="Simple test from Hutect solution" ></meta>
      </Head>
      <Layout>
        <FormsContainer />
      </Layout>
    </Fragment>
  );
}


export async function getServerSideProps() { 

  await db.connect();
  
  const data = await userOrganizationDetails.find({});
  
  const result = JSON.parse(JSON.stringify(data));

  return {
      props: {
          result
      },
  }
};