import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handelSubmit }) => {
  return (
    <section>
      <div>Create Post</div>
      <form onSubmit={handelSubmit}>
        <label>
          <span>Ypur AI Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here"
            required
          ></textarea>
        </label>
        <label>
          <span>tag</span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Tag"
            required
          ></input>
        </label>
        <div>
          <Link href="/">Cancel</Link>
          <button type="submit" disabled={submitting}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
