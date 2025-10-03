import { Card } from "./ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "YouTube Creator",
      content: "Vanshu transformed my raw footage into stunning videos. The editing quality is exceptional and delivery is always on time!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Business Owner",
      content: "Working with Vanshu was a game-changer for our marketing videos. Professional, creative, and highly skilled.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Content Creator",
      content: "The attention to detail and creative vision is outstanding. Vanshu understands exactly what I need for my content.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 smooth-transition animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-montserrat font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
