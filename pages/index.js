import Head from 'next/head'

export default (props) => (
  <div className='measure center f4 f3'>
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
    </Head>
    <section className='bg-white pa3 pa4-ns flex flex-column justify-between '>
      <div></div>
      <div>
        <h1 className='f1 fw3'>Hi 👋, I'm Jeffrey.</h1>
        <h2 className='f2 fw3'>I'm a software engineer and freelance web developer. 💻</h2>
      </div>
      <div></div>
    </section>
    <section className='pa3 pa4-ns'>
      <h2 className='f2 fw3'>Resume</h2>
      <ul>
        <li><b>Software Engineer</b> Adobe, August 2016 - Present</li>
        <li><b>Software Engineer Intern</b> Qualtrics, Jan 2015 - April 2016</li>
      </ul>
    </section>
    <section className='pa3 pa4-ns'>
      <h2 className='f2 fw3'>Freelance Projects</h2>
      <ul>
        <li>PlenaData Home Page Animation ~ Jan 2018</li>
        <li>Whistic Home Page ~ Nov 2017</li>
      </ul>
    </section>
    <section className='pa3 pa4-ns'>
      <h2 className='f2 fw3'>Blog Posts</h2>
      <ul>
        <li>Javascript Alternative to Animate Motion ~ Jan 2018</li>
      </ul>
    </section>
  </div>
)
