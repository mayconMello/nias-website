import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image?: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer">
        {/* Imagem do Post */}
        {post.image && (
          <div className="relative aspect-[16/9] mb-6 rounded-xl overflow-hidden bg-zinc/10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Conteúdo */}
        <div className="space-y-3">
          {/* Meta Info */}
          <div className="flex items-center gap-3 text-sm text-muted">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{formattedDate}</time>
          </div>

          {/* Título */}
          <h2 className="text-2xl font-bold group-hover:text-nias-blue transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-muted leading-relaxed">{post.excerpt}</p>

          {/* Read More */}
          <div className="flex items-center gap-2 text-nias-blue font-medium pt-2">
            Ler artigo
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
