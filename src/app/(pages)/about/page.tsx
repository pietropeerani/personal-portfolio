import Header from '@/app/components/header/header'
import style from './about.module.scss'
import Footer from '@/app/components/footer/footer'

export default function About() {
    const content = [
        `
        19-year-old web development enthusiast.
        I've been working with JavaScript for years, building open-source projects and adding a touch of pixel art along the way.
        Occasionally, I freelance, focusing on developing websites and applications.
        I enjoy taking on challenges and continuously improving my skills.
        `,
    ]

    return (
        <>
            <Header theme='dark' />

            <div className="bg-black text-white flex flex-col items-center justify-center">
                <div className="py-52 px-24 flex justify-center items-center">
                    <h1 className="max-w-screen-lg text-8xl font-semibold text-center">
                        About me
                    </h1>
                </div>
                <div className="max-w-6xl pb-52 flex flex-col gap-80">
                    {
                        content.map((item, index) => (
                            <div key={index}>
                                <h3 className={`text-center ${style.scroolReveal} text-5xl leading-[60px]`}>
                                    <span>{item}</span>
                                </h3>
                            </div>
                        ))
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}