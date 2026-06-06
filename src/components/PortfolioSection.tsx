import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Тёмный минимализм",
    category: "Магазин одежды",
    image: "/placeholder.jpg",
    description:
      "Строгое тёмное оформление для магазина одежды. Включает обложку, аватар, 10 шаблонов постов и сторис в едином стиле.",
    url: "#pricing",
    tags: ["Одежда", "Тёмная тема", "Минимализм"],
  },
  {
    title: "Яркий fashion",
    category: "Бьюти и косметика",
    image: "/placeholder.jpg",
    description:
      "Яркий и стильный комплект для бьюти-мастеров и косметических брендов. Пастельные цвета, женственный шрифт, готовые шаблоны для акций.",
    url: "#pricing",
    tags: ["Бьюти", "Пастель", "Женский стиль"],
  },
  {
    title: "Деловой синий",
    category: "Услуги и B2B",
    image: "/placeholder.jpg",
    description:
      "Строгий профессиональный дизайн для компаний, оказывающих услуги. Синяя гамма, чёткая типографика, шаблоны для кейсов и отзывов.",
    url: "#pricing",
    tags: ["B2B", "Услуги", "Синяя гамма"],
  },
  {
    title: "Уютный крафт",
    category: "Handmade и крафт",
    image: "/placeholder.jpg",
    description:
      "Тёплый и уютный стиль для мастеров хенд-мейда и крафтовых магазинов. Бежевые тона, живые текстуры, шаблоны для фото товаров.",
    url: "#pricing",
    tags: ["Handmade", "Крафт", "Тёплые тона"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Примеры шаблонов</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Посмотрите, как выглядят наши комплекты оформления — стильно, профессионально и готово к использованию.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.location.href = project.url}
                  >
                    Купить комплект <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}