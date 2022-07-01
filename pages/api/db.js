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
        { title: "Создание" },
        { title: "Редактирование" },
        { title: "Рассмотрение" },
        { title: "Уточнение" },
        { title: "Утверждено" },
        { title: "Получено в работу" },
        { title: "Назначено исполнителя" },
        { title: "В работе" },
        { title: "Доставлено на склад" },
        { title: "Принято на склад" },
        { title: "Выдано заявителю" },
        { title: "Принято заявителем" },
        { title: "Закрыто" },
        { title: "Архив" },
      ],
      skipDuplicates: true,
    });
    res.end(
      JSON.stringify({
        message: `${result} stages added`,
      }),
    );
  }
  if (req.body.command === "Add user") {
    const rand = (Math.random() * 10).toFixed(2);

    const result = await prisma.user.create({
      data: {
        email: `test${rand}@mail.com`,
        password: "test",
        name: `TestUserNo${rand}`,
        roleId: "5b31d4b7-fea1-486a-98be-66061343d238",
      },
    });
    res.end(
      JSON.stringify({
        message: result.name,
      }),
    );
  }
  if (req.body.command === "Add special user") {
    const rand = (Math.random() * 10).toFixed(2);
    const { email, password, name, roleId } = req.body;

    const result = await prisma.user.create({
      data: {
        email: email,
        password: password,
        name: name,
        roleId: roleId,
      },
    });
    res.end(
      JSON.stringify({
        message: result.name,
      }),
    );
  }
};
