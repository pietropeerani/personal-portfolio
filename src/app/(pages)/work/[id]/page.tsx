import fs from 'fs';

import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

import style from './work.module.scss'
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';


function getPostContent(id: any) {
    const folder = "src/app/(pages)/work/articles/"
    const file = folder + `${id}.md`
    try {
        const content = fs.readFileSync(file, 'utf8')

        const matterResult = matter(content)
        return matterResult
    } catch (error) {
        notFound()
    }
}

export default function Article(props: any) {
    const id = props.params.id
    const post = getPostContent(id)

    const componentsStyle = {
        h1: ({ children }: any) => <h1 className="text-3xl">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-2xl">{children}</h2>,
        hr: () => <hr className='border-color-[#ddd]'/>,
        img: ({ src, alt }: any) => <Image src={`/work/${id}${src}`} width={0} height={0} layout='responsive' alt={alt} />
    }

    return (
        <>
            {/* <Header theme={post.data.textColor} /> */}
            <Header theme="light" />

            <article className='max-w-[1240px] mx-auto pb-32'>
                <div className='px-4 pb-12 pt-[120px]'>
                    <Image className='rounded-md'
                        src={`/work/${id}/${post.data.image}`}
                        width={0}
                        height={0}
                        layout='responsive'
                        alt='Cover'
                    />
                </div>

                <Markdown className={`${style.article} flex flex-col gap-12 px-2 text-justify`}
                    options={{
                        overrides: componentsStyle
                    }}
                >
                    {post.content}
                </Markdown>
            </article>

            <Footer />
        </>
    )
}