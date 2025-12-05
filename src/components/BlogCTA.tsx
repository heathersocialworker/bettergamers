import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight, Clock, TrendingUp, Heart } from "lucide-react";

const featuredArticles = [
  {
    title: "5 Signs Your Gaming Has Become Problematic",
    description: "Learn to recognize when casual gaming crosses the line into addiction.",
    readTime: "5 min read",
    icon: TrendingUp,
    category: "Awareness"
  },
  {
    title: "How to Support a Loved One with Gaming Addiction",
    description: "Practical tips for families navigating this challenging situation.",
    readTime: "7 min read",
    icon: Heart,
    category: "Family Support"
  },
  {
    title: "Building a Healthy Relationship with Video Games",
    description: "Strategies for enjoying games without letting them control your life.",
    readTime: "6 min read",
    icon: BookOpen,
    category: "Recovery"
  }
];

export const BlogCTA = () => {
  return (
    <section className="py-20 bg-muted/30" aria-labelledby="blog-heading">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Recovery Resources & Guides
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert articles, tips, and guides to help you understand gaming addiction and support recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {featuredArticles.map((article, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <article.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {article.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Resources
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
