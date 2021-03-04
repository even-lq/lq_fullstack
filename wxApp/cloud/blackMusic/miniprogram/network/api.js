import http from 'http.js' //引入上面封装好的请求方法

const setCookie = () => {
  return http({
    url: '/user/setCookie',
    data: {
      "data": "eas_sid=D145096958N2q4L3L4C582E883; pgv_pvid=3133598376; pgv_pvi=9211227136; RK=NfZF9dbTNh; ptcz=adf3436d85a7f1db609fdfb4008a334f7652a7bff1ce86e3db439c1018cbf4b5; LW_sid=O1t5b9A9y95161E2L5Z0C4u2w0; LW_uid=z1G5c9d939y1B122x5c0V4O2b1; ied_qq=null; uin_cookie=null; tvfe_boss_uuid=ee4aba0383b017d6; o_cookie=895457569; pac_uid=1_895457569; tmeLoginType=2; open_id=501B18EFBAB14F198C3A65D14B198A91; euin=ow4z7ecz7w-P7n**; psrf_qqrefresh_token=4921AC0B37D64B69E1027D085612D991; psrf_qqopenid=2FCB4A3AFD6B2E332266AA893E84F9D8; psrf_qqaccess_token=118DD1FBCBE97FDC0EC615A08979D623; psrf_qqunionid=; pgv_info=ssid=s8889617560; skey=@53YTeK40H; uid=823688729; _qpsvr_localtk=0.6242520287135696; ptui_loginuin=2504806244; uin=2504806244; psrf_access_token_expiresAt=1622559289; qqmusic_key=Q_H_L_2ape-060eSJYkSTRO76TWKm4842xi9MlqHSt6mjerHxFM_kyvdyb033pPuq5pcA; psrf_musickey_createtime=1614783289; qm_keyst=Q_H_L_2ape-060eSJYkSTRO76TWKm4842xi9MlqHSt6mjerHxFM_kyvdyb033pPuq5pcA"
    },
    method: 'post',
    header: {
      'content-type': 'application/json'
    },
  })
}

const cookie = () => {
  return http({
    url: '/user/cookie',
    method: 'post',
    header: {
      'content-type': 'application/json'
    },
  })
}

// 将方法导出，实现复用
export default {
  setCookie,
  cookie
}
