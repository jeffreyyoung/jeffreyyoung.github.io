import Head from 'next/head'
import withData from './../hocs/withData';
import withLayout from './../hocs/withLayout';
import Link from 'next/link';

export default withData(withLayout(({projects, posts}) => (
  <div>
    <section className='bg-white pt3 mr3 ml3 flex flex-column justify-between '>
      <div></div>
      <div>
        <h1 className='f1 fw3'>Hi 👋, I'm Jeffrey.</h1>
        <h2 className='f3 fw3'>I'm a software engineer and freelance web developer. 💻</h2>
      </div>
      <div></div>
    </section>
    <section className='pt3 mr3 ml3'>
      <h2 className='f2 fw3'>Resume 📋</h2>
      <ul className='f4 fw3'>
        <li>Software Engineer <b>Adobe</b>, Aug 2016 - Present</li>
        <li>Software Engineer Intern <b>Qualtrics</b>, Jan 2015 - April 2016</li>
        <li>Analyst <b>Anglepoint Inc</b>, Oct 2014 - Jan 2015</li>
        <li>Front-End Web Developer <b>BYU Broadcasting</b>, Sep 2013 - Oct 2014</li>
      </ul>
    </section>
    <section className='pt3 mr3 ml3'>
      <h2 className='f2 fw3'>Projects 🛠</h2>
      <ul className='f4 fw3'>
        {projects.map(p => (<li><Link href={p.href} as={p.url}><a>{p.title}</a></Link></li>))}
      </ul>
    </section>
    <section className='pt3 mr3 ml3'>
      <h2 className='f2 fw3'>Blog 📝</h2>
      <ul className='f4 fw3'>
        {posts.map(p => (<li><Link href={p.href} as={p.url}><a>{p.title}</a></Link></li>))}
      </ul>
    </section>
  </div>
)));
