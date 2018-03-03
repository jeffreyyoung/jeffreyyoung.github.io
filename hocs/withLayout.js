import Head from 'next/head'

export default function withLayout(ComposedComponent) {
  return props => (
    <div className='sans-serif measure center f4 f3'>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
      </Head>
      <ComposedComponent {...props} />
    </div>)
}