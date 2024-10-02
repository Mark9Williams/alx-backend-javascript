// 7-load-balancer.js
export default function loadBalancer(chinaDownload, USDownload) {
    // Return the promise that resolves first
    return Promise.race([chinaDownload, USDownload]);
  }
  