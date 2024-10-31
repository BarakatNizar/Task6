import axios from 'axios'

const BASE_URL ="https://backendsec3.trainees-mad-s.com/api/"




export default axios.create({
    baseURL:BASE_URL,
    headers: { "Content-Type" : 'application/json'},
})


export const axiosPrivate= axios.create({
    baseURL:BASE_URL,
    headers: { "Content-Type" : 'application/json'},
    withCredentials:true,    
})


export const AuthURL={
    RegisterPost:"register",
    LoginPost:"login",
    LogoutGet:"logout",
    VerifyEPost:"verify-email",
    ResendVCodePost:"resend-verification-code",
}

export const PasswordReset={
    ForgottenPost:"user/password/forgot-password",
    VerifyResetCodePost:"user/password/verify-forgot-Password-code",
    ResetPasswordPost:"user/password/reset-password"
}

export const Orders={
    CreateOrderPost:"orders/create_order",
    UpdateOrderPost:"orders/update_order",
    DeleteOrderGet:"orders/delete_order/",
    ClearOrdersGet:"orders/clear_orders"
}