module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
      gas: 6721975,
      from: "0x665B67F74a1729EA4681717A8dC43a426Fe70C64",
    },
  },
  contracts_directory: "./testing/",
  contracts_build_directory: "./src/build/",
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100,
        },
      },
    },
  },
};
