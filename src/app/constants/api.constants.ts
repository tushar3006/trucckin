export const apiConstants = {
  AUTH: {
    LOGIN: {
      URL: '/user/signIn',
      METHOD: 'post'
    },
    SIGNUP: {
      URL: '/user/signUp',
      METHOD: 'post'
    },
    VERIFY_OTP: {
      URL: '/user/verifyOtp',
      METHOD: 'post'
    },
    RESET_PASSWORD: {
      URL: '/user/forgotPassword',
      METHOD: 'post'
    },
    LOGIN_VIA_ACCESS_TOKEN: {
      URL: '/user/accessTokenLogin',
      METHOD: 'post'
    },
    RESEND_OTP: {
      URL: '/user/resendOtp',
      METHOD: 'post'
    }
  }
};
