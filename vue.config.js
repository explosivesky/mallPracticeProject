module.exports = {
 configureWebpack: {
  resolve: {
   extensions: [],
   alias: {
    'common': '@/common',
    'assets': '@/assets',
    'components': '@/components',
    'views': '@/views',
    'network': '@/network'
   }
  }
 }
}