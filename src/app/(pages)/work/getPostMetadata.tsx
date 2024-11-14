import { CardProps } from '@/app/components/work-card/work-card';
import fs from 'fs';
import matter from 'gray-matter';

interface WorkProps extends CardProps {
    date: string
}

function parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
}

function sortPostsByDate(posts: WorkProps[]): WorkProps[] {
    return posts.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
}

export function getPostsMetadata(basePath: string) {
    const folder = basePath + "/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith('.md'));

    const posts: WorkProps[] = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf-8');
        const matterResult = matter(fileContents);
    
        if (matterResult.data.render) {
            return {
                link: filename.slice(0, -3) || undefined,
                title: matterResult.data.title as string,
                subtitle: matterResult.data.subtitle as string,
                image: matterResult.data.image as string,
                imagePosition: matterResult.data.imagePosition as string,
                textColor: matterResult.data.textColor as string, 
                bgColor: matterResult.data.bgColor as string,    
                date: matterResult.data.date as string,
            } as WorkProps;
        }
        return undefined;
    }).filter((post): post is WorkProps => post !== undefined);

    const sortedPosts = sortPostsByDate(posts);

    return sortedPosts;
}
