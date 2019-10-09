/**
 * 生产环境
 */
;(function () {
  window.SITE_CONFIG = {}

  window.SITE_CONFIG['baseUrl'] = 'http://ip/platform-admin'// 后台接口请求地址

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain'] = './' // 域名
  window.SITE_CONFIG['version'] = ''   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version
})()
