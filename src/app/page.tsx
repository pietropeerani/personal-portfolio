import { getPostsMetadata } from "./(pages)/work/getPostMetadata";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Card from "./components/work-card/work-card";

export default function Home() {
  const postMetadata = getPostsMetadata("src/app/(pages)/work/articles")

  return (
    <>
      <Header theme="light" />

      <div className="px-4">

        <div className="h-screen flex justify-center items-center">
          <h1 className="max-w-screen-lg title-h1 text-center">
            Developer specialized in web developement
          </h1>
        </div>


        <div className="max-w-screen-xl mx-auto mb-56 flex flex-col gap-40">
          <Card
            title="About me"
            textColor="black"
            bgColor="#f5f5f5"
            link="/about"
          />

          <h2 className="mx-auto text-center max-w-4xl text-5xl font-semibold leading-[55px]">
            By designing accessible design systems, I help designers and developers create inclusive experiences.
          </h2>

          {
            postMetadata.slice(0, 3).map((post, index) => (
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
      </div>


      <Footer />
    </>
  )
}