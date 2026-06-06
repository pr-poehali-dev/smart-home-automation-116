import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Купила комплект «Тёмный минимализм» для своего магазина одежды — группа преобразилась за полчаса! Клиенты сразу заметили и начали писать комплименты. Очень довольна!",
    name: "Анна",
    role: "Владелица магазина одежды",
  },
  {
    quote:
      "Долго откладывала нормальное оформление группы, думала это сложно и дорого. Оказалось — скачала, поменяла текст в Figma и загрузила. Всё чётко, инструкция понятная.",
    name: "Марина",
    role: "Мастер маникюра",
  },
  {
    quote:
      "Взял премиум-комплект для агентства недвижимости. Качество огонь — всё в едином стиле, смотрится очень профессионально. Рекомендую всем, кто хочет выглядеть солидно в ВК.",
    name: "Дмитрий",
    role: "Агент по недвижимости",
  },
  {
    quote:
      "Шаблоны для постов экономят мне столько времени! Раньше тратила час на каждый пост, теперь 5 минут. И выглядит намного лучше, чем делала сама.",
    name: "Ольга",
    role: "Кондитер, онлайн-магазин",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят покупатели
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Сотни групп ВКонтакте уже преобразились с нашими шаблонами — вот что говорят их владельцы.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}