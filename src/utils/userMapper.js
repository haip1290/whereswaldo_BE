const userToDto = (user) => {
  const { startTime, endTime } = user;
  const score = ((startTime.getTime() - endTime.getTime()) / 1000).toFixed(2);
  return { id: user.id, name: user.name, score };
};

module.exports = { userToDto };
