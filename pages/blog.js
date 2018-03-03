import withData from './../hocs/withData';
import withLayout from './../hocs/withLayout';
import Link from 'next/link';


export default withData(withLayout(({post}) => (
  <article className='pt4'>
    <Link href='/'><a>👈 Back</a></Link>
    <h1 className='green'>{post.meta.title}</h1>
    <div dangerouslySetInnerHTML={{__html:post.html}} />
  </article>
)));