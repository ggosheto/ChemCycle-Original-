import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Eye, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/header";
import Footer from "@/components/footer";

const blogPosts = [
  {
    id: 1,
    title: "Бъдещето на рециклирането на пластмаса: Революционни технологии променят играта",
    excerpt:
      "Открийте как най-новите технологии трансформират пластмасовите отпадъци в ценни ресурси, създавайки истинска кръгова икономика за устойчиво бъдеще.",
    content: "Индустрията за рециклиране на пластмаса претърпява революционна трансформация...",
    author: "Д-р Сара Чен",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "recycling",
    readTime: 8,
    publishedAt: "2024-01-18T10:00:00Z",
    tags: ["пластмаса", "технология", "кръгова-икономика", "иновации"],
    featured: true,
    views: 2847,
    likes: 156,
    image: "/placeholder.svg?height=300&width=500",
  },
  // ...existing blog post objects from blog/page.tsx...
  {
    id: 2,
    title: "10 прости начина да намалите въглеродния си отпечатък днес",
    excerpt:
      "Практични, изпълними стъпки, които можете да предприемете още сега, за да минимизирате въздействието си върху околната среда и да допринесете за по-здравословна планета.",
    content: "Създаването на положително въздействие върху околната среда не изисква драстични промени в начина на живот...",
    author: "Михаел Родригес",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "sustainability",
    readTime: 5,
    publishedAt: "2024-01-17T14:30:00Z",
    tags: ["въглероден-отпечатък", "начин-на-живот", "съвети", "околна-среда"],
    featured: false,
    views: 1923,
    likes: 89,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Почистване на океана: Как усилията за морско опазване правят вълни",
    excerpt:
      "Разгледайте иновативните проекти и технологии, работещи за премахване на пластмасовото замърсяване от нашите океани и защита на морския живот.",
    content: "Нашите океани са изправени пред безпрецедентна криза поради пластмасово замърсяване...",
    author: "Ема Томпсън",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "conservation",
    readTime: 12,
    publishedAt: "2024-01-16T09:15:00Z",
    tags: ["океан", "морски-живот", "почистване", "опазване"],
    featured: true,
    views: 3421,
    likes: 234,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Слънчева енергийна революция: Защо 2024 е повратна точка",
    excerpt:
      "Анализ на драматичното намаляване на разходите и подобренията в ефективността, които правят слънчевата енергия доминиращ енергиен източник на бъдещето.",
    content: "Индустрията за слънчева енергия достигна критична точка през 2024...",
    author: "Джеймс Парк",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "renewable",
    readTime: 10,
    publishedAt: "2024-01-15T16:45:00Z",
    tags: ["слънчева-енергия", "възобновяема-енергия", "икономика", "бъдеще"],
    featured: false,
    views: 2156,
    likes: 178,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Градско земеделие: Отглеждане на храна в сърцето на града",
    excerpt:
      "Как вертикалните ферми и градините на покривите революционизират производството на храни, като същевременно намаляват транспортните емисии и градските топлинни острови.",
    content: "Градовете по целия свят възприемат зелената революция...",
    author: "Лиза Уанг",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "sustainability",
    readTime: 7,
    publishedAt: "2024-01-14T11:20:00Z",
    tags: ["градско-земеделие", "продоволствена-сигурност", "градове", "иновации"],
    featured: false,
    views: 1687,
    likes: 92,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "Скритата екологична цена на бързата мода",
    excerpt:
      "Разкриване на истинското въздействие на модната индустрия върху нашата планета и изследване на устойчиви алтернативи, които не правят компромис с стила.",
    content: "Модната индустрия е един от най-големите замърсители в света...",
    author: "Рейчъл Грийн",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "sustainability",
    readTime: 9,
    publishedAt: "2024-01-13T13:30:00Z",
    tags: ["мода", "отпадъци-от-текстил", "устойчива-мода", "околната-среда"],
    featured: false,
    views: 2934,
    likes: 201,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 7,
    title: "Пробив в технологията за улавяне на въглерод може да промени всичко",
    excerpt:
      "Учени разработиха нов метод за улавяне на CO2 директно от атмосферата с безпрецедентна ефективност и икономичност.",
    content: "Екип от изследователи обяви голям пробив...",
    author: "Д-р Алекс Кумар",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "innovation",
    readTime: 11,
    publishedAt: "2024-01-12T08:00:00Z",
    tags: ["уловяне-на-въглерод", "климатични-технологии", "пробив", "изследвания"],
    featured: true,
    views: 4123,
    likes: 312,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 8,
    title: "Опазване на водата: Умни технологии за един жаден свят",
    excerpt:
      "Изследване на иновативни технологии и стратегии за пестене на вода, които помагат на общностите да се адаптират към нарастващата недостиг на вода.",
    content: "Недостигът на вода засяга милиарди хора по света...",
    author: "Мария Сантос",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "conservation",
    readTime: 6,
    publishedAt: "2024-01-11T15:10:00Z",
    tags: ["опазване-на-водата", "умни-технологии", "недостиг", "иновации"],
    featured: false,
    views: 1456,
    likes: 67,
    image: "/placeholder.svg?height=300&width=500",
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number(params.id));
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 pt-16">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/blog" className="text-green-600 hover:underline mb-6 inline-block">← Всички статии</Link>
        <div className="mb-8">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg shadow-lg mb-6" />
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-green-100 text-green-700 border-green-300 text-xs">{post.category}</Badge>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-xs">{formatDate(post.publishedAt)}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} мин.</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="w-8 h-8">
              <AvatarImage src={post.authorAvatar} alt={post.author} />
              <AvatarFallback className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs">
                {post.author.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="text-gray-700 font-medium">{post.author}</span>
          </div>
        </div>
        <div className="prose prose-lg max-w-none mb-8">
          <p>{post.content}</p>
        </div>
        <div className="flex items-center gap-6 text-gray-500 text-sm mb-8">
          <div className="flex items-center gap-1"><Eye className="w-4 h-4" />{post.views} преглеждания</div>
          <div className="flex items-center gap-1"><Heart className="w-4 h-4" />{post.likes} харесвания</div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag} className="bg-blue-100 text-blue-700 border-blue-300 text-xs">#{tag}</Badge>
          ))}
        </div>
        <Link href="/blog" className="text-green-600 hover:underline">← Обратно към всички статии</Link>
      </div>
      <Footer />
    </div>
  );
}
