import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

export const metadata = {
  title: "Blog",
  description:
    "Insights sobre análise de crédito, inteligência artificial e inovação financeira.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "O Futuro da Análise de Crédito com IA",
      excerpt:
        "Como a inteligência artificial está transformando a forma como as instituições financeiras avaliam risco e tomam decisões de crédito.",
      date: "2025-11-06",
      author: "Nias",
      slug: "futuro-analise-credito-ia",
      image: "/nias-wave.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 md:px-8 pt-32 pb-20">
        {/* Header do Blog */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nias' Blog</h1>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
