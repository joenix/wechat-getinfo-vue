// Get User Agent
const u = navigator.userAgent.toLowerCase();

// Get Micro Messenger
const m = u.match(/MicroMessenger/i);

// Get Environ
const env = {
  isExcept: false,
  isWechat: false,
  isMiniProgram: false
};

// Sync Wechat
function syncEnv() {
  return new Promise((resolve, reject) =>
    wx.miniProgram.getEnv(({ miniprogram }) =>
      resolve(
        ((env.isWechat = !miniprogram), (env.isMiniProgram = miniprogram), env)
      )
    )
  );
}

// Export
export default async () => {
  if (!m || m[0] !== "micromessenger") {
    return (env.isExcept = true), env;
  }
  return await syncEnv();
};
