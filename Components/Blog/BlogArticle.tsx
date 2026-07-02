import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowLeft, Heart, MessageCircle, Tag } from "lucide-react";
import type { BlogPost } from "./blogContent";
import BlogMeta from "./BlogMeta";

type BlogArticleProps = {
  post: BlogPost;
};

export default function BlogArticle({ post }: BlogArticleProps) {
  return (
    <article className="blog-article">
      <div className="blog-article__inner">
        <Link href="/blog" className="blog-article__back">
          <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
          Back to Blog
        </Link>

        <header className="blog-article__header">
          <span className="blog-article__category">{post.category}</span>
          <h1 className="blog-article__title">{post.title}</h1>
          <p className="blog-article__excerpt">{post.excerpt}</p>

          <BlogMeta post={post} variant="detail" />

          <div className="blog-article__author-card">
            <span className="blog-article__author-avatar-wrap">
              <AppImage
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="56px"
                className="blog-article__author-avatar"
              />
            </span>
            <div>
              <p className="blog-article__author-name">{post.author.name}</p>
              <p className="blog-article__author-role">{post.author.role}</p>
            </div>
          </div>
        </header>

        <div className="blog-article__cover">
          <AppImage
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 991px) 100vw, 900px"
            className="blog-article__cover-image"
          />
        </div>

        <div className="blog-article__content">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="blog-article__tags">
          <Tag size={16} strokeWidth={2} aria-hidden="true" />
          {post.tags.map((tag) => (
            <span key={tag} className="blog-article__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="blog-article__engagement">
          <button type="button" className="blog-article__engage-btn">
            <Heart size={18} strokeWidth={2} aria-hidden="true" />
            {post.likes} Likes
          </button>
          <button type="button" className="blog-article__engage-btn">
            <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
            {post.commentsCount} Comments
          </button>
        </div>

        <section className="blog-comments" aria-labelledby="blog-comments-title">
          <h2 id="blog-comments-title" className="blog-comments__title">
            Comments ({post.comments.length})
          </h2>

          <ul className="blog-comments__list">
            {post.comments.map((comment) => (
              <li key={comment.id} className="blog-comment">
                <span className="blog-comment__avatar-wrap">
                  <AppImage
                    src={comment.avatar}
                    alt={comment.author}
                    fill
                    sizes="44px"
                    className="blog-comment__avatar"
                  />
                </span>
                <div className="blog-comment__body">
                  <div className="blog-comment__head">
                    <p className="blog-comment__author">{comment.author}</p>
                    <p className="blog-comment__time">
                      {comment.date} · {comment.time}
                    </p>
                  </div>
                  <p className="blog-comment__text">{comment.text}</p>
                  <button type="button" className="blog-comment__like">
                    <Heart size={14} strokeWidth={2} aria-hidden="true" />
                    {comment.likes}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
