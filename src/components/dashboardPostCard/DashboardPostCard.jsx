const { default: useDeleteBlogPost } = require("@/hooks/useDeletePost");
const { CiEdit } = require("react-icons/ci");
const { IoIosRemoveCircleOutline } = require("react-icons/io");

function DashboardPostCard({ post, onDelete }) {
    const { deleteBlogPost, loading, error } = useDeleteBlogPost();
  
    const handleDelete = async () => {
      await deleteBlogPost(post.slug);
      onDelete();
    };
    
    if(loading) {
        return       <div
        key={post.slug}
        className="flex justify-between border-2 w-full p-4 border-red-900 bg-red-900 text-background rounded-lg"
      >
        Deleting...
      </div>
    }

    return (
      <div
        key={post.slug}
        className="flex justify-between border-2 w-full p-4 border-primary rounded-lg bg-background hover:bg-secondary"
      >
        <p>{post.title}</p>
        <div className="flex gap-4">
          <button className="rounded-full w-8 h-8">
            <CiEdit className="w-full h-full text-primary" />
          </button>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="rounded-full w-8 h-8"
          >
            <IoIosRemoveCircleOutline className="w-full h-full text-red-900" />
          </button>
        </div>
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>
    );
  }
  
  export default DashboardPostCard;