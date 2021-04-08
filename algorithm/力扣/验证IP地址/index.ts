function validIPAddress(IP: string): string {
  let ipv4 = /^(([1-9]|[1-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([1-9]|[1-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5])$/

  let ipv6 = /^([0-9a-fA-F]{1,4}\:){7}[0-9a-fA-F]{1,4}$/
  if (ipv4.test(IP)) {
    return 'ipv4'
  } else if (ipv6.test(IP)) {
    return 'ipv6'
  }
  else {
    return 'Neither'
  }

}

console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));



