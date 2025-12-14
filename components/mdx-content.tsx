import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'

import Counter from '@/components/counter'

function Code({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  const codeHTML = highlight(children as string)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function CustomImage(props: any) {
  return (
    <span className='relative block w-full overflow-hidden rounded-lg'>
      <Image
        {...props}
        width={800}
        height={450}
        className='w-full h-auto rounded-lg'
        sizes='(max-width: 768px) 100vw, 768px'
      />
    </span>
  )
}

const components = {
  code: Code,
  Counter,
  img: CustomImage
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
