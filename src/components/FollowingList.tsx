import PostCard from './PostCard';

function FollowingList() { 
    const posts = [
        {
            title: "How to do the Magic Circle",
            author: "Sandra Smith",
            postImg: "Img",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "10 Amigurumis to Make",
            author: "Sandra Smith",
            postImg: "Img",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "Img",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "Img",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "Img",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "Img",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "Img",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "Img",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
    ];
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Following List Component</h1>
            <div className="flex flex-col gap-5 mb-2">
                {posts.map((post, i) => 
                <div>
                    <PostCard post={post} key={i} />
                </div>
                )}
            </div>
        </div>
    )
    
}

export default FollowingList

// 5:02:56