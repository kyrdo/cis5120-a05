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
        
        <section className="relative flex flex-col gap-4 min-w-[16rem] max-w-[24rem] cursor-pointer group border rounded-lg overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 z-20"></div>
            
            {/* Content */}
            <div className="relative flex flex-col p-4">
                <div className="flex-[1] mb-2 z-10 ">
                    <img src="src/assets/image-tile.png" alt="postImg" className="border-2 rounded-lg w-full h-auto" />
                </div>
                <p className="pb-2 font-semibold text-dark-purple capitalize group-hover:text-white z-20">{post.author}</p>
                <h2 className="text-xl group-hover:text-white z-20 font-bold text-dark-purple line-clamp-2 leading-6 capitalize py-2 hover:text-white">
                    {post.title}
                </h2>
                <div className="text-dark-purple line-clamp-2 leading-5 group-hover:text-white z-20">
                    {post.desc}
                </div>
            </div>
        </section>
        /*
        <section className=" flex flex-col sm:flex-row gap-4 cursor-pointer w-[20rem] "
        >
            <div className="bg-black 
        bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 z-20">

            <div className="flex-[2.5]">
                <p className="pb-2 font-semibold text-dark-purple capitalize">{post.author}</p>
                
                <div className="flex-[1] z-10">
                    <img src="src/assets/image-tile.png" alt="postImg" className="border-2 rounded-lg w-[20rem]"/>
                </div>
                <h2 className="text-xl font-bold text-dark-purple line-clamp-2 leading-6 capitalize py-2">
                    {post.title}
                </h2>
                <div className="text-dark-purple line-clamp-2 leading-5">
                    {post.desc}
                </div>
            </div>
            </div>

        </section>
        */
    )
    
};

export default PostCard;