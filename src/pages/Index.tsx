import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Index = () => {
  const animalData = [
    { name: "Кенни", weight: 77, age: 28, breed: "Дюрок", status: "Здоров" },
    { name: "Морти", weight: 72, age: 25, breed: "Ландрас", status: "Здоров" },
    { name: "Энцо", weight: 82, age: 32, breed: "Йоркшир", status: "Лечение" },
  ];

  const weightData = [
    { date: "01.07", kenny: 75, morti: 70, enzo: 80 },
    { date: "02.07", kenny: 76, morti: 71, enzo: 81 },
    { date: "03.07", kenny: 77, morti: 72, enzo: 82 },
  ];

  const feedingData = [
    { animal: "Кенни", daily: 4.5, weekly: 31.5 },
    { animal: "Морти", daily: 4.2, weekly: 29.4 },
    { animal: "Энцо", daily: 4.8, weekly: 33.6 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-teal-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 opacity-20">
          <div className="text-6xl animate-pulse">🌸</div>
        </div>
        <div className="absolute top-32 right-20 w-16 h-16 opacity-25">
          <div className="text-5xl animate-bounce">🦋</div>
        </div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 opacity-20">
          <div className="text-4xl animate-pulse">🌺</div>
        </div>
        <div className="absolute top-1/2 right-10 w-14 h-14 opacity-25">
          <div className="text-4xl animate-bounce">🌿</div>
        </div>
        <div className="absolute bottom-32 right-1/3 w-10 h-10 opacity-20">
          <div className="text-3xl animate-pulse">🌼</div>
        </div>

        {/* Decorative patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-16 left-1/3 w-32 h-32 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-pink-300 to-teal-300 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-16 right-1/4 w-40 h-40 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-rose-300 to-emerald-300 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="absolute -top-4 -left-4 text-3xl opacity-30 animate-pulse">
            🌸
          </div>
          <div className="absolute -top-2 -right-2 text-2xl opacity-30 animate-bounce">
            🦋
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent mb-4 font-montserrat">
            Animal Tracker
          </h1>
          <p className="text-xl text-gray-600">
            Система учета животных с отслеживанием веса и кормления
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-2xl opacity-30">🐷</div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-pink-700">
                Всего животных
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-pink-600 mb-2">3</div>
              <p className="text-sm text-gray-600">Активных записей</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-2xl opacity-30">⚖️</div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-teal-700">
                Средний вес
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-teal-600 mb-2">77 кг</div>
              <p className="text-sm text-gray-600">По всем животным</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-2xl opacity-30">🌾</div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-rose-700">
                Расход корма
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-rose-600 mb-2">
                94.5 кг
              </div>
              <p className="text-sm text-gray-600">В неделю</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 text-xl opacity-30">📈</div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-pink-700 flex items-center gap-2">
                <Icon name="TrendingUp" size={24} />
                Динамика веса
              </CardTitle>
              <CardDescription>
                Изменение веса животных за последние дни
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weightData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="kenny"
                    stroke="#ec4899"
                    strokeWidth={3}
                    dot={{ fill: "#ec4899", strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="morti"
                    stroke="#14b8a6"
                    strokeWidth={3}
                    dot={{ fill: "#14b8a6", strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="enzo"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    dot={{ fill: "#f59e0b", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-teal-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 text-xl opacity-30">🌾</div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-teal-700 flex items-center gap-2">
                <Icon name="BarChart3" size={24} />
                Потребление корма
              </CardTitle>
              <CardDescription>
                Суточный расход корма по животным
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={feedingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="animal" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Bar dataKey="daily" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Animal Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 text-xl opacity-30">➕</div>
            <div className="absolute bottom-4 left-4 text-lg opacity-20">
              🌸
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-rose-700 flex items-center gap-2">
                <Icon name="Plus" size={24} />
                Добавить животное
              </CardTitle>
              <CardDescription>
                Регистрация нового животного в системе
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Имя
                  </label>
                  <Input
                    placeholder="Введите имя"
                    className="border-pink-200 focus:border-pink-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Вес (кг)
                  </label>
                  <Input
                    type="number"
                    placeholder="0"
                    className="border-pink-200 focus:border-pink-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Порода
                </label>
                <Select>
                  <SelectTrigger className="border-pink-200 focus:border-pink-400">
                    <SelectValue placeholder="Выберите породу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="durok">Дюрок</SelectItem>
                    <SelectItem value="landras">Ландрас</SelectItem>
                    <SelectItem value="yorkshire">Йоркшир</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                <Icon name="Plus" size={18} className="mr-2" />
                Добавить
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 text-xl opacity-30">🦋</div>
            <div className="absolute bottom-4 right-4 text-lg opacity-20">
              🌿
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-purple-700 flex items-center gap-2">
                <Icon name="Activity" size={24} />
                Быстрые действия
              </CardTitle>
              <CardDescription>Часто используемые функции</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start border-purple-200 hover:bg-purple-50"
              >
                <Icon name="Scale" size={18} className="mr-2" />
                Взвесить животное
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-purple-200 hover:bg-purple-50"
              >
                <Icon name="Stethoscope" size={18} className="mr-2" />
                Медицинский осмотр
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-purple-200 hover:bg-purple-50"
              >
                <Icon name="Utensils" size={18} className="mr-2" />
                Записать кормление
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-purple-200 hover:bg-purple-50"
              >
                <Icon name="FileText" size={18} className="mr-2" />
                Создать отчет
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Animals Table */}
        <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-lg relative overflow-hidden">
          <div className="absolute top-4 right-4 text-xl opacity-30">📊</div>
          <div className="absolute bottom-4 left-4 text-lg opacity-20">🌺</div>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-700 flex items-center gap-2">
              <Icon name="Database" size={24} />
              Профили животных
            </CardTitle>
            <CardDescription>
              Основная информация о зарегистрированных животных
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-pink-200">
                  <TableHead className="font-semibold text-pink-700">
                    Имя
                  </TableHead>
                  <TableHead className="font-semibold text-pink-700">
                    Вес (кг)
                  </TableHead>
                  <TableHead className="font-semibold text-pink-700">
                    Возраст (нед)
                  </TableHead>
                  <TableHead className="font-semibold text-pink-700">
                    Порода
                  </TableHead>
                  <TableHead className="font-semibold text-pink-700">
                    Статус
                  </TableHead>
                  <TableHead className="font-semibold text-pink-700">
                    Действия
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {animalData.map((animal, index) => (
                  <TableRow
                    key={index}
                    className="border-pink-100 hover:bg-pink-50/50"
                  >
                    <TableCell className="font-medium text-gray-800">
                      {animal.name}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {animal.weight}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {animal.age}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {animal.breed}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          animal.status === "Здоров" ? "default" : "secondary"
                        }
                        className={
                          animal.status === "Здоров"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {animal.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-pink-200 hover:bg-pink-50"
                        >
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-pink-200 hover:bg-pink-50"
                        >
                          <Icon name="Eye" size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
