type Post = {
    title: string;
    author: string;
    postImg: string;
    date: string;
    desc: string;
}

type PostCardProps = {
    post: Post;
    key: number;
}
const PostCard: React.FC<PostCardProps> = ({ post, key }) => { 
    return (
        <section className="flex flex-col sm:flex-row gap-4 cursor-pointer">
            <div className="flex-2.5">
                <p className="pb-2 font-semibold text-dark-purple capitalize">{post.author}</p>
                <h2 className="text-xl font-bold text-dark-purple line-clamp-2 leading-6 capitalize">
                    {post.title}
                </h2>
                <div className="py-1 text-dark-purple line-clamp-2 leading-5">

                </div>
            </div>
        </section>
    )
    
};

export default PostCard;