import withData from './../hocs/withData';
import withLayout from './../hocs/withLayout';
import Link from 'next/link';

export default withData(withLayout(({project}) => (
  <article className='pt4 mr3 ml3'>
    <Link href='/'><a>👈 Back</a></Link>
    <h1 className='green'>{project.meta.title}</h1>
    <div dangerouslySetInnerHTML={{__html:project.html}} />
  </article>
)));