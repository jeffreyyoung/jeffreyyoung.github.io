import Head from 'next/head'

export default (props) => (
  <div className='measure center f4 f3'>
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
    </Head>
    <section className='bg-white pt3 mr3 ml3 flex flex-column justify-between '>
      <div></div>
      <div>
        <h1 className='f1 fw3'>Hi 👋, I'm Jeffrey.</h1>
        <h2 className='f2 fw3'>I'm a software engineer and freelance web developer. 💻</h2>
      </div>
      <div></div>
    </section>
    <section className='pt3 mr3 ml3'>
      <h2 className='f2 fw3'>Resume</h2>
      <ul>
        <li>Software Engineer <b>Adobe</b>, Aug 2016 - Present</li>
        <li>Software Engineer Intern <b>Qualtrics</b>, Jan 2015 - April 2016</li>
        <li>Analyst <b>Anglepoint Inc</b>, Oct 2014 - Jan 2015</li>
        <li>Front-End Web Developer <b>BYU Broadcasting</b>, Sep 2013 - Oct 2014</li>
      </ul>
    </section>
    <section className='pt3 mr3 ml3'>
      <h2 className='f2 fw3'>Freelance Projects</h2>
      <ul>
        <li>PlenaData Home Page Animation ~ Jan 2018</li>
        <li>Whistic Home Page ~ Nov 2017</li>
      </ul>
    </section>
    <section className='pt3 mr3 ml3'>
      <h2 className='f2 fw3'>Blog Posts</h2>
      <ul>
        <li>Javascript Alternative to Animate Motion ~ Jan 2018</li>
      </ul>
    </section>
  </div>
)
