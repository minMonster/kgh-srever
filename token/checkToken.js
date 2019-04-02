module.exports = async (ctx, next) => {
  let token = ctx.get('Authorization');
  console.log('checkToken', token);
  ctx.body = {
    token: token
  };
  await next();
};
