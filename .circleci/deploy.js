const sftp = require('node-sftp-deploy')

const config = {
  host: process.env.deploy_host,
  port: process.env.deploy_port,
  user: process.env.deploy_user,
  pass: process.env.deploy_password,
  remotePath: process.env.deploy_path,
  sourcePath: '../dist'
}
 
sftp(config).then(() => {
  console.log(`Deployed to ${config.host}`)
})
