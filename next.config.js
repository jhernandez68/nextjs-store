/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        //se añaden las variables a todos los datos
        prependData: `@import "main.sass"`,
      },
};

module.exports = nextConfig