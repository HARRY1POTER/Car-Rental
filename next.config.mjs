/** @type {import('next').NextConfig} */

import pkg from "next-pwa";

const nextConfig = {
  dest: "public",
};

export default pkg(nextConfig);
