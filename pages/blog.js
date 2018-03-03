import withData from './../hocs/withData';
import withLayout from './../hocs/withLayout';
import Link from 'next/link';


export default withData(withLayout(({post}) => (
  <article className='pt4 mr3 ml3 fw3'>
    <Link href='/'><a className='f4'>👈 Back</a></Link>
    <h2 className='green fw3 f2'>{post.meta.title}</h2>
    <div className='md-wrapper' dangerouslySetInnerHTML={{__html:post.html}} />
  </article>
)));