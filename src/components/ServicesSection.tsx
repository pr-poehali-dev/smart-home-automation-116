import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Code, Share2, Target, Search } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Обложка группы",
    description:
      "Красивая обложка — первое, что видит посетитель. Наши шаблоны обложек сделаны в современном стиле и сразу задают нужное впечатление о вашем бренде или магазине.",
  },
  {
    icon: Palette,
    title: "Аватар и иконка",
    description:
      "Профессиональный аватар для группы ВКонтакте: чёткий, стильный, запоминающийся. Шаблоны адаптированы под все размеры — выглядит идеально на любом устройстве.",
  },
  {
    icon: Code,
    title: "Посты и сторис",
    description:
      "Готовые шаблоны для публикаций и сторис. Просто замените текст и фото — и ваш контент выглядит как у профессионального дизайнера. Экономьте время каждый день.",
  },
  {
    icon: Share2,
    title: "Баннеры и акции",
    description:
      "Шаблоны для рекламных баннеров, акций и спецпредложений. Привлекают внимание, мотивируют кликнуть и купить — проверено на реальных группах.",
  },
  {
    icon: Target,
    title: "Единый стиль",
    description:
      "Все шаблоны в комплекте выполнены в едином фирменном стиле. Ваша группа будет выглядеть целостно и профессионально — как у крупных брендов.",
  },
  {
    icon: Search,
    title: "Лёгкая замена",
    description:
      "Шаблоны поставляются в форматах PSD и Figma. Редактировать просто даже без опыта в дизайне — подробная инструкция прилагается к каждому комплекту.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Что входит в комплект
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для <span className="text-primary">стильной группы</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Каждый комплект включает все необходимые элементы оформления — скачал и сразу используешь без доработок.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}