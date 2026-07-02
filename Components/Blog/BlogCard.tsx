import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "./blogContent";
import BlogMeta from "./BlogMeta";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={`blog-card${featured ? " blog-card--featured" : ""}`}>
      <Link href={`/blog/${post.slug}`} className="blog-card__media">
        <AppImage
          src={post.image}
          alt={post.title}
          fill
          sizes={featured ? "(max-width: 991px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className="blog-card__image"
        />
        <span className="blog-card__category">{post.category}</span>
      </Link>

      <div className="blog-card__body">
        <BlogMeta post={post} variant="card" />

        <h2 className="blog-card__title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="blog-card__excerpt">{post.excerpt}</p>

        <div className="blog-card__footer">
          <div className="blog-card__author">
            <span className="blog-card__avatar-wrap">
              <AppImage
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="36px"
                className="blog-card__avatar"
              />
            </span>
            <div>
              <p className="blog-card__author-name">{post.author.name}</p>
              <p className="blog-card__author-role">{post.author.role}</p>
            </div>
          </div>

          <Link href={`/blog/${post.slug}`} className="blog-card__read">
            Read Article
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
