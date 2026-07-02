import Link from "next/link";
import AppImage from "@/Components/ui/AppImage";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "./blogContent";

type BlogRelatedProps = {
  posts: BlogPost[];
};

export default function BlogRelated({ posts }: BlogRelatedProps) {
  if (posts.length === 0) return null;

  return (
    <section className="blog-related" aria-labelledby="blog-related-title">
      <div className="blog-related__inner">
        <h2 id="blog-related-title" className="blog-related__title">
          More Articles
        </h2>

        <div className="blog-related__grid">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="blog-related__card">
              <div className="blog-related__image-wrap">
                <AppImage
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="280px"
                  className="blog-related__image"
                />
              </div>
              <div className="blog-related__body">
                <span className="blog-related__category">{post.category}</span>
                <h3 className="blog-related__card-title">{post.title}</h3>
                <span className="blog-related__link">
                  Read more
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
