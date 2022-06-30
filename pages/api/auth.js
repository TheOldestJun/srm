import prisma from "../../prisma";

export default async (req, res) => {
  const { email, password } = req.body;
  let user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    res.end(
      JSON.stringify({
        status: "error",
        message: "Такого пользователя не существует",
      }),
    );
    return;
  }
  if (user.password !== password) {
    res.end(
      JSON.stringify({
        status: "error",
        message: "Неверный пароль",
      }),
    );
    return;
  }
  res.end(
    JSON.stringify({
      status: "success",
      message: "Добро пожаловать",
      roleId: user.roleId,
      name: user.name,
      email: user.email,
    }),
  );
};
