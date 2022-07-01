import prisma from "../../prisma";

export default async (req, res) => {
  console.log(req.body);
  if (req.body.command === "Add roles") {
    const result = await prisma.role.createMany({
      data: [
        { title: "GOD" },
        { title: "Администраторы" },
        { title: "Дирекция" },
        { title: "Заявители" },
        { title: "CEO исполнители" },
        { title: "Исполнители" },
        { title: "Кладовщики" },
        { title: "Бухгалтерия" },
        { title: "Тестировщики" },
      ],
      skipDuplicates: true,
    });
    res.end(
      JSON.stringify({
        message: `${result} roles added`,
      }),
    );
  }
  if (req.body.command === "Add stages") {
    const result = await prisma.stage.createMany({
      data: [
        { title: "GOD" },
        { title: "Администраторы" },
        { title: "Дирекция" },
        { title: "Заявители" },
        { title: "CEO исполнители" },
        { title: "Исполнители" },
        { title: "Кладовщики" },
        { title: "Бухгалтерия" },
        { title: "Тестировщики" },
      ],
      skipDuplicates: true,
    });
    res.end(
      JSON.stringify({
        message: `${result} stages added`,
      }),
    );
  }
};
