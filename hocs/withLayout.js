import Head from 'next/head'

export default function withLayout(ComposedComponent) {
  return props => (
    <div className='sans-serif measure center f4 f3'>
      <style jsx global>{`
        .md-wrapper * {
            font-weight: 300;
        }

        .md-wrapper h2 {
            font-size: 2.25rem;
        }

        .md-wrapper p {
            font-size: 1.25rem;
        }

        .md-wrapper a {
            font-size: 1.25rem;
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
      </Head>
      <ComposedComponent {...props} />
    </div>)
}