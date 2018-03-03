import Head from 'next/head'

export default function withLayout(ComposedComponent) {
  return props => (
    <div className='sans-serif measure center f4 f3'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
      </Head>
      <ComposedComponent {...props} />
    </div>)
}