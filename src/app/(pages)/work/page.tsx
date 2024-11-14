import Card from "@/app/components/work-card/work-card"
import { getPostsMetadata } from "./getPostMetadata"
import Header from "@/app/components/header/header"
import Footer from "@/app/components/footer/footer"

export default function Works() {
    const postMetadata = getPostsMetadata("src/app/(pages)/work/articles")
    return (
        <>
            <Header theme="light" />

            <div className="py-52 px-24 flex justify-center items-center">
                <h1 className="max-w-screen-lg text-8xl font-semibold text-center">
                    Select work
                </h1>
            </div>

            <div className="max-w-screen-xl mx-auto flex flex-col gap-40">
            {
                postMetadata.map((post, index) => (
                        <Card key={index} 
                            title={post.title}
                            subtitle={post.subtitle}
                            image={`/work/${post.link}/${post.image}`}
                            imagePosition={post.imagePosition}
                            textColor={post.textColor}
                            bgColor={post.bgColor}
                            link={`/work/${post.link}`}
                        />
                ))
            }
            </div>

            <Footer />
        </>
    )
}